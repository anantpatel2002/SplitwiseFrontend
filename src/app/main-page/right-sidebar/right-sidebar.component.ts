import { Component } from '@angular/core';
import { GetAbsoluteNumberPipe } from './getAbsoluteNumber.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right-sidebar',
  imports: [GetAbsoluteNumberPipe, FormsModule],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {
  demoData = [
    {
      name:'Ishant Yadav',
      owesInGroup: 0
    },
    {
      name:'Anant Patel',
      owesInGroup: 10,
    },
    {
      name:'Sujit Pattanaik',
      owesInGroup: -10,
    }

  ]
  whiteboardDisplay:boolean = false;
  whiteboardData:string = '';

  navigation:'balances'|'expenses'|'trends'|'whiteboard'|'settings' = 'balances';

  editWhiteboard(){

  }
}
