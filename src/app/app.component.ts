import { Component } from '@angular/core';
import { Transaction } from './models/transaction';
import { TransactionService } from './transaction.service';
import { TransactionType } from './models/transactiontype';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransactionService]
})
export class AppComponent implements OnInit{
  constructor(private transactionService: TransactionService) { }
  
  title = 'Ledger';
  transactions: Transaction[];
  types = TransactionType;
  getTransactions(): void{
    this.transactions = this.transactionService.GetTranscations();
  }

  ngOnInit(): void {
    this.getTransactions();
  }
}
