import { User } from '../../entities/User';
import { IUsersRepositories } from '../../repositories/IUsersRepositories';

export class FindUserByIdUseCase{

   private userRepository: IUsersRepositories;

   constructor(userRepository: IUsersRepositories){
      this.userRepository = userRepository;
   }

   async execute(id: string){
      const user = await this.userRepository.findById(id);
      return new User({
         name: user.name,
         email: user.email
      }, user.id);
   }

}