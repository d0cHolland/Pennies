import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { Transaction } from './models/transaction';
import { LedgerComponent } from './ledger/ledger.component';
import { DatepickerModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LedgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    RouterModule.forRoot([
      {      
        path:'categories',
        component: CategoriesComponent
      },
      {
        path:'',
        component:LedgerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]  
})

export class AppModule{ }
