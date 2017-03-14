import { Injectable } from '@angular/core';
import { Transaction } from './models/transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable()

export class TransactionService {
    public GetTranscations(): Transaction[]{
        return TRANSACTIONS;
    }

    public AddTransaction(T: Transaction){
        
    }

    public SaveTransaction(T: Transaction){

    }

    public DeleteTransactiion(T: Transaction){

    }
}