import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggedInHeaderComponent } from "../logged-in-header/logged-in-header.component";

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet, LoggedInHeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
