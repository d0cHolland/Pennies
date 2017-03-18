import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { IDataService } from './idata.service'; 

@Injectable()

export class TransactionService implements IDataService {
    private transactions: Transaction[] = [
        { Id: 1, Date: new Date('3/1/2017'), Description: "Starting Balance",  Category: "Starting Balance", Type: 3, Amount: 100.00 },
        { Id: 2, Date: new Date('3/2/2017'), Description: "Test Transaction 1",  Category: "Food", Cleared: true, Type: 1, Amount: 100.01 },
        { Id: 3, Date: new Date('3/3/2017'), Description: "Test Transaction 2",  Category: "Test Category", Type: 1, Amount: 101.00 },
        { Id: 4, Date: new Date('3/4/2017'), Description: "Test Transaction 3",  Category: "Test Category", Type: 1, Amount: 110.00 },
        { Id: 5, Date: new Date('3/5/2017'), Description: "Test Transaction 4",  Category: "Test Category", Type: 1, Amount: 111.11 },
        { Id: 6, Date: new Date('3/7/2017'), Description: "Test Transaction 5",  Category: "Test Category", Type: 1, Amount: 172.59 }
    ];
    
    public Get(): Transaction[]{
        return this.transactions;
    }

    public GetById(id:number): Transaction{
        return this.transactions.find((t) => t.Id === id);
    }

    public Add(T: Transaction){
        T.Id = this.transactions[this.transactions.length - 1].Id + 1;
        this.transactions.push(T);
    }

    public Save(T: Transaction){
        let c = this.transactions.find((c) => c.Id === T.Id);
        c = T;
    }

    public Delete(T: Transaction){
        let c = this.transactions.find((c) => c.Id === T.Id);
        delete this.transactions[this.transactions.indexOf(T)];
    }
}