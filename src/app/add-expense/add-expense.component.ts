import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  imports: [],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter();
}
