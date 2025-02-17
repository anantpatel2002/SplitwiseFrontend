import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
  animations: [
    trigger('expand', [
      // Animation for when the component is inserted into the DOM
      transition(':enter', [
        style({ height: '0' }), // Start with height 0 and hidden
        animate('150ms linear', style({ height: '*'}))
      ]),
      // Animation for when the component is removed from the DOM
      transition(':leave', [
        animate('150ms linear', style({ height: '0' }))
      ])
    ])
  ],
  // Bind the animation trigger to the host element
  host: { '[@expand]': '' }
})
export class ExpenseComponent {

  
}
