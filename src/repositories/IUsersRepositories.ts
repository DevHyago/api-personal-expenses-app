import { User } from '../entities/User';

export interface IUsersRepositories{
   save(user: User): Promise<void>;
   findById(id: string): Promise<User>;
}