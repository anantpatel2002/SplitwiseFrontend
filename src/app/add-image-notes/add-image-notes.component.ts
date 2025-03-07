import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-image-notes',
  imports: [],
  templateUrl: './add-image-notes.component.html',
  styleUrl: './add-image-notes.component.css'
})
export class AddImageNotesComponent {
  @Output() closeDiv = new EventEmitter();
}
