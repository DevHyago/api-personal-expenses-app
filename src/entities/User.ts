import { v4 as uuidV4 } from 'uuid';

export class User{
   public readonly id: string;
   public name: string;
   public email: string;
   public password: string;

   constructor(props: Omit<User, 'id'>, id?:string){
      if(!id){
         this.id = uuidV4();
      }else{
         this.id = id;
      }
      this.name = props.name;
      this.email = props.email;
      this.password = props.password;
   }

}