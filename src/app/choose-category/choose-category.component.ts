import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-category',
  imports: [],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.css'
})
export class ChooseCategoryComponent {

  @Output() closeDiv = new EventEmitter();

  key: string = 'Food';
  darkGrey: string = '#CCCCCC';
  lightGrey: string = '#EEEEEE'
  white: string = '#ffffff'
  categories: string[] = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Utilities',
    'Healthcare',
    'Education',
  ]
  catSize:number = this.categories.length;

  subCategories: { [key: string]: string[] } = {
    'Food': ['Restaurants', 'Groceries', 'Cafes'],
    'Transportation': ['Gas', 'Public Transportation', 'Car Maintenance'],
    'Entertainment': ['Movies', 'Concerts', 'Sports'],
    'Shopping': ['Clothing', 'Electronics', 'Home Decor'],
    'Utilities': ['Electricity', 'Water', 'Internet'],
    'Healthcare': ['Doctor', 'Dental', 'Pharmacy'],
    'Education': ['Tuition', 'Books', 'Online Courses', 'Certification', 'Competition'],
  }

  setSubCategory(category: string) {
    this.key = category;
  }
}
