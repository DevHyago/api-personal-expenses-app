export class AppError extends Error{
   public readonly status: number;
   constructor(message: string, status?: number){
      super(message);
      if(!status){
         this.status = 400;
      }else{
         this.status = status;
      }
   }
}