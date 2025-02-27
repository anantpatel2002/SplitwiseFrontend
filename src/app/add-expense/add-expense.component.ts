import { Component, EventEmitter, Output } from '@angular/core';
import { ChoosePayerComponent } from "../choose-payer/choose-payer.component";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { DatePickerComponentComponent } from '../date-picker-component/date-picker-component.component';

@Component({
  selector: 'app-add-expense',
  imports: [ChoosePayerComponent, DatePickerComponentComponent],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css',
  animations: [
    // Back div animation: keyframes for both forward and reverse transitions
    trigger('animateBack', [
      state('start', style({
        transform: 'translateX(-200px)',
        opacity: 0
      })),
      // "end" state: final position with the desired final style.
      // Here we’re keeping the final transform and opacity.
      state('end', style({
        transform: 'translateX(-140px) ',
        opacity: 1
      })),
      // Forward animation: moves right while fading in then out
      transition(":enter", animate('.2s ease-in-out', keyframes([
        style({ transform: 'translateX(-200px)', opacity: 0, offset: 0 }),
        style({ transform: 'translateX(-140px)', opacity: 1, offset: 1 })
      ]))),
      // Reverse animation: moves from right to original position using reverse keyframes
      transition(':leave', animate('.2s ease-in-out', keyframes([
        style({ transform: 'translateX(-140px)', opacity: 1, offset: 0 }),
        style({ transform: 'translateX(-200px)', opacity: 0, offset: 1 })
      ])))
    ]),
    // Front div animation: simply slides left and back
    trigger('animateFront', [
      state('start', style({
        transform: 'translateX(0px)'
      })),
      state('end', style({
        transform: 'translateX(-160px)'
      })),
      transition('start => end', animate('.2s ease-in-out', keyframes([
        style({ transform: 'translateX(0px)', offset: 0 }),
        style({ transform: 'translateX(-160px)', offset: 1 })
      ]))),
      transition('end => start', animate('.2s ease-in-out', keyframes([
        style({ transform: 'translateX(-160px)', offset: 0 }),
        style({ transform: 'translateX(0px)', offset: 1 })
      ])))
    ])
  ]
})
export class AddExpenseComponent {
  @Output() expenseAdded = new EventEmitter();

  state = 'start';
  showBackDiv = false;

  startAnimation() {
    this.showBackDiv = true;
    this.state = 'end';
  }

  closeAnimation() {
    this.state = 'start';
    this.showBackDiv = false;
  }
}
