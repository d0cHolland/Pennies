import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';
import { TransactionType } from '../models/transactiontype';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


@Component({  
  selector: 'app-ledger',  
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
  providers: [TransactionService, CategoryService] 
})

export class LedgerComponent implements OnInit {

  constructor(private transactionService: TransactionService, private categoryService: CategoryService) { }
  title = 'Ledger'
  transactions: Transaction[];
  types = TransactionType;
  categories: Category[];
  subtotals: number[] = [] ;
  tempT = new Transaction();
  public cellClick(event): any {
    var input, span;
    console.log({"Clicked": event.target})
    if(event.target.tagName.toLowerCase() !== "span" && event.target.tagName.toLowerCase() !== "td"){
      return;
    }
    else if(event.target.tagName.toLowerCase() === "span"){
      input = event.target.previousElementSibling;
      span = event.target;
    }    
    else{
      input = event.target.firstElementChild;
      span = event.target.children[1];
    }
    if(input !== undefined){
      input.removeAttribute('hidden');
      input.focus();
    }
    if(span !== undefined)
      span.setAttribute('hidden', undefined);
  }

  public focusOut(event){
    let input = event.target;
    let span = event.target.nextElementSibling;
    console.log({"blur": event.target})
    if(input !== undefined)
      input.setAttribute('hidden', undefined);
    if(span !== undefined)
      span.removeAttribute('hidden');
  }

  getBalance(t:Transaction, i:number):number{
    let balance = 0;
    for(var n = 0; n <= i; n++){
      t = this.transactions[n];
      let amount = t.Type === TransactionType.Expense ? (t.Amount * -1) : t.Amount;
      balance += amount;
    }
    return balance;
  }

  getTransactions(): void{
    this.transactions = this.transactionService.Get();
  }

  getCategories(): void{
    this.categories = this.categoryService.Get();
  }

  save(): void{
    console.log(this.tempT)
    this.transactions.push(this.tempT);
    this.clear();
  }

  clear(): void{
    this.tempT = new Transaction();
  }

  ngOnInit(): void {
    this.getTransactions();    
    this.getCategories();    
  }
  
  showCal(d:any):void{
    console.log("showCal");
    console.log(d);
    d.toggle();
  }
}

