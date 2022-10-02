import { CategoryExpense } from '../types/CategoryExpense';
import { v4 as uuidV4 } from 'uuid';

export class Expense{
   public readonly id: string;
   public description: string;
   public category: CategoryExpense;
   public date_expense: Date;
   public value: number;
   public authorId: string;

   constructor(props: Omit<Expense, 'id'>, id?: string){
      if(!id){
         this.id = uuidV4();
      }else{
         this.id = id;
      }
      this.description = props.description;
      this.category = props.category;
      this.date_expense = props.date_expense;
      this.value = props.value;
      this.authorId = props.authorId;
   }

}