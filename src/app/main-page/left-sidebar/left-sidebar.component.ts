import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  demoGroups = [
    {
      id: 1,
      name: 'Trip',
    },
    {
      id: 2,
      name: 'Work',
    },
    {
      id: 3,
      name: 'Personal',
    }
  ]
  demoFriends = [
    {
      id: 1,
      name: 'Ishant',
    },
    {
      id: 2,
      name: 'Mayank',
    },
    {
      id: 3,
      name: 'Swayam',
    }
  ]
}
