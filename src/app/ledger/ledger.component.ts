import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../transaction.service';
import { TransactionType } from '../models/transactiontype';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
  providers: [TransactionService],  
})

export class LedgerComponent implements OnInit {

  constructor(private transactionService: TransactionService) { }
  title = 'Ledger'
  transactions: Transaction[];
  types = TransactionType;
  
  public cellClick(event): any {
    var input, span;
    if(event.target.tagName.toLowerCase() === "span"){
      input = event.target.previousElementSibling;
      span = event.target;
    }
    else{
      input = event.target.firstChildElement;
      span = event.target.children[1];
    }
    input.classList.toggle('hidden');
    span.classList.toggle('hidden');
  }

  public focusOut(event){
    console.log('focus out')
  }

  getTransactions(): void{
    this.transactions = this.transactionService.GetTranscations();
  }

  ngOnInit(): void {
    this.getTransactions();    
  }

}

