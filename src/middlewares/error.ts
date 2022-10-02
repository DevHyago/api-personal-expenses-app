import { Request, Response, NextFunction } from "express";
import { AppError } from "../error/AppError";

export function middlewareError(error: Error, request: Request, response: Response, next: NextFunction){

   if(error instanceof AppError){
      return response.status(error.status).json({
         error: error.message
      });
   }

   return response.status(500).json({
      error: 'Internal Server Error.'
   });

}