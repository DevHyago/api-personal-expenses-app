import { Router, Request, Response } from 'express';
import { createUserController } from './useCases/createUser';
import { findUserByIdController } from './useCases/findUserById';

const router = Router();

router.post('/users', (request: Request, response: Response) => {
   return createUserController.handle(request, response);
});

router.get('/users/:id', (request: Request, response: Response) => {
   return findUserByIdController.handle(request, response);
});

export { router }