import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-category',
  imports: [],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.css'
})
export class ChooseCategoryComponent {
  @Output() closeDiv = new EventEmitter();
}
