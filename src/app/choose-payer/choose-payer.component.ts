import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-payer',
  imports: [],
  templateUrl: './choose-payer.component.html',
  styleUrl: './choose-payer.component.css'
})
export class ChoosePayerComponent {
    @Output() closeDiv = new EventEmitter();
}
