import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UserPostgresRepository } from '../../repositories/implementations/UsersPostgresRepository';

const userPostgresRepository = new UserPostgresRepository();
const createUserUseCase = new CreateUserUseCase(userPostgresRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }