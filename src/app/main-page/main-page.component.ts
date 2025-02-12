import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroupComponent } from "./group/group.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, LeftSidebarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
