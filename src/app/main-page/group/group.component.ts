import { Component, inject, Renderer2 } from '@angular/core';
import { ExpenseComponent } from "./expense/expense.component";

@Component({
  selector: 'app-group',
  imports: [ExpenseComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.css'
})
export class GroupComponent {
  renderer = inject(Renderer2);
  expanded:boolean[] = [false, false, false, false];



  toggleExpense(index:number) {
    this.expanded[index] = !this.expanded[index];
  }


}
