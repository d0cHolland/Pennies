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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { GoogleDocs } from './services/google.data.service';
import { OpaqueToken } from '@angular/core';
export let  IDataService = new OpaqueToken('./services/idata.service');


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LedgerComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot(),
    NgbModule.forRoot(),
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
  providers: [{provide: IDataService, useValue: GoogleDocs }],
  bootstrap: [AppComponent]  
})

export class AppModule{ }
