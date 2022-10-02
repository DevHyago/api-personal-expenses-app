import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController{

   private createUserUseCase: CreateUserUseCase;

   constructor(createUserUseCase: CreateUserUseCase){
      this.createUserUseCase = createUserUseCase;
   }

   async handle(request: Request, response: Response){
      const { name, email, password } = request.body;
      await this.createUserUseCase.execute({name, email, password});
      return response.status(201).send();
   }

}