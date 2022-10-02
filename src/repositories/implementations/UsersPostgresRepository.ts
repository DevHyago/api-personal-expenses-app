import { IUsersRepositories } from '../IUsersRepositories';
import { User } from '../../entities/User';
import { createConnection } from '../../database/connection';
import { Pool } from 'pg';
import { AppError } from '../../error/AppError';

export class UserPostgresRepository implements IUsersRepositories{

   private client: Pool;

   constructor(){
      createConnection().then(client => this.client = client);
   }

   async save({id, name, email, password}: User): Promise<void>{
      try{
         await this.client.query("INSERT INTO USERS(ID, NAME, EMAIL, PASSWORD) VALUES ($1, $2, $3, $4)", [
            id, name, email, password
         ]);
      }catch(e){
         throw new AppError('Error saving user');
      }
   }

   async findById(idUser: string): Promise<User> {
       try{
         const { rows } = await this.client.query("SELECT * FROM USERS WHERE ID = $1 LIMIT 1", [idUser]);
         const { id, name, email, password } = rows[0];
         const user = new User({name, email, password}, id);
         return user;
       }catch(e){
         throw new AppError('User not found');
       }
   }

}