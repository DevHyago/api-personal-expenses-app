import { UserPostgresRepository } from '../../repositories/implementations/UsersPostgresRepository';
import { FindUserByIdUseCase } from './FindUserByIdUseCase';
import { FindUserByIdController } from './FindUserByIdController';

const userRepository = new UserPostgresRepository();
const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export { findUserByIdController }