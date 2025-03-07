import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-group',
  imports: [],
  templateUrl: './choose-group.component.html',
  styleUrl: './choose-group.component.css'
})
export class ChooseGroupComponent {
  @Output() closeDiv = new EventEmitter();
}
