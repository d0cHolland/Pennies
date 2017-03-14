import { Category } from './category'
import { Transaction } from './transaction'
import { TransactionType } from './transactiontype'

export class Ledger{
    public AccountTitle: string;
    public Transactions?: Transaction[];
}