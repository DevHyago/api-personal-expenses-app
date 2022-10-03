import { FindUserByIdUseCase } from "./FindUserByIdUseCase";
import { Request, Response } from "express";
import { User } from "../../entities/User";

export class FindUserByIdController{

   private findUserByIdUseCase: FindUserByIdUseCase;

   constructor(findUserByIdUseCase: FindUserByIdUseCase){
      this.findUserByIdUseCase = findUserByIdUseCase;
   }

   async handle(request: Request, response: Response){
      const { id } = request.params;
      const user: User = await this.findUserByIdUseCase.execute(id);
      return response.status(200).json(user);
   }

}