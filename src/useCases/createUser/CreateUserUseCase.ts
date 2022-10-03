import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";
import { CreateUserDTO } from './CreateUserDTO';
import { AppError } from '../../error/AppError';
import { hash } from "bcrypt";

export class CreateUserUseCase{

   private userRepository: IUsersRepositories;

   constructor(userRepository: IUsersRepositories){
      this.userRepository = userRepository;
   }

   async execute(data: CreateUserDTO){

      if(!data.name || !data.email || !data.password){
         throw new AppError('Name/Email/Password is required', 422);
      }

      const passwordHash = await hash(data.password, 8);

      const user: User = new User({
         name: data.name,
         email: data.email,
         password: passwordHash
      });

      await this.userRepository.save(user);

   }

}