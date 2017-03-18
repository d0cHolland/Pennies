import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { IDataService } from './idata.service';

@Injectable()
export class CategoryService implements IDataService {
    private categories:Category[] = [
        { Id: 1, Name: "Deposit" },
        { Id: 2, Name: "Car Ins/ Tag" },
        { Id: 3, Name: "Dining - business" },
        { Id: 4, Name: "Food" },
        { Id: 5, Name: "Gas - Rosemary" },
        { Id: 6, Name: "Gas - Will" },
        { Id: 7, Name: "Health/medical" },
        { Id: 8, Name: "Home Supplies/ Impr" },
        { Id: 9, Name: "Kids' Savings" },
        { Id: 10, Name: "Kids' Supplies	" },
        { Id: 11, Name: "Liam's School" },
        { Id: 12, Name: "Mortgage" },
        { Id: 13, Name: "Nicotine" },
        { Id: 14, Name: "Others" },
        { Id: 15, Name: "Pets" },
        { Id: 16, Name: "Power/Water/Att" },
        { Id: 17, Name: "Tech on Credit Card" },
        { Id: 18, Name: "Will's Spending" }
    ];
    public Get(): Category[]{
       return this.categories;
    }

    public GetById(id:number){ 
        return this.categories.find((c) => c.Id === id);
    }
    
    public Add(T: Category){
        T.Id = this.categories[this.categories.length - 1].Id + 1;
        this.categories.push(T);
    }

    public Save(T: Category){        
        let c = this.categories.find((c) => c.Id === T.Id);
        c = T;
    }

    public Delete(T: Category){
        let c = this.categories.find((c) => c.Id === T.Id);
        delete this.categories[this.categories.indexOf(T)];
    }
}