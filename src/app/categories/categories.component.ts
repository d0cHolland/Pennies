import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor() {     
    this.categories = [
      { Name: "Food", Children: [ { Name: "Fast Food" }] },      
      { Name: "Video Games" },
      { Name: "Utilities", Children: [
        { Name: "Power"},
        { Name: "Water"},
        { Name: "Internets"}
      ]}
    ]
  }

  ngOnInit() {
  }

}
