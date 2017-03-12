import { Category } from "./category"
import { TransactionType } from "./transactiontype"

export class Transaction{
    public Id: number;
    public Date: Date; 
    public Description: string;
    public Type: TransactionType;
    public Amount: Number;
    public Category?: string;    
    public Cleared?: boolean = false;
}