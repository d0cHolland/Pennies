import { Category } from './category'
import { Transaction } from './transaction'
import { TransactionType } from './transactiontype'

export class Ledger{
    public AccountTitle: string;
    public Transactions?: Transaction[];

    public AddTransaction(T: Transaction){
        
    }

    public SaveTransaction(T: Transaction){

    }

    public DeleteTransactiion(T: Transaction){

    }
}