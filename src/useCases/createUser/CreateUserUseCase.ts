import { User } from "../../entities/User";
import { IUsersRepositories } from "../../repositories/IUsersRepositories";
import { CreateUserDTO } from './CreateUserDTO';
import { AppError } from '../../error/AppError';

export class CreateUserUseCase{

   private userRepository: IUsersRepositories;

   constructor(userRepository: IUsersRepositories){
      this.userRepository = userRepository;
   }

   async execute(data: CreateUserDTO){

      if(!data.name || !data.email || !data.password){
         throw new AppError('Name/Email/Password is required', 422);
      }

      const user: User = new User(data);
      await this.userRepository.save(user);

   }

}