import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-split-options',
  imports: [],
  templateUrl: './choose-split-options.component.html',
  styleUrl: './choose-split-options.component.css'
})
export class ChooseSplitOptionsComponent {
  @Output() closeDiv = new EventEmitter();
}
