import { Component, EventEmitter, Output } from '@angular/core';
import { ChoosePayerComponent } from "../choose-payer/choose-payer.component";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { DatePickerComponentComponent } from '../date-picker-component/date-picker-component.component';
import { ChooseGroupComponent } from "../choose-group/choose-group.component";
import { AddImageNotesComponent } from '../add-image-notes/add-image-notes.component';
import { ChooseCategoryComponent } from '../choose-category/choose-category.component';

@Component({
  selector: 'app-add-expense',
  imports: [ChoosePayerComponent, DatePickerComponentComponent, ChooseGroupComponent, AddImageNotesComponent, ChooseCategoryComponent],
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
  showBackDiv = [false, false, false, false, false];

  startAnimation(index: number) {
    const result = this.showBackDiv.reduce((acc, value, index) =>{
      if(value) {
        this.closeAnimation(index);
        console.log('current index' + index);
        acc.push(index);
      }
      
      return acc;
    }, [] as number[]);
    console.log(result);
    
    if(!result.includes(index)) {
      this.showBackDiv[index] = true;
    this.state = 'end';
    }
  }



  closeAnimation(index: number) {
    this.state = 'start';
    this.showBackDiv[index] = false;
  }
}
