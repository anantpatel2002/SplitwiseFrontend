import { Component, inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-logged-in-header',
  imports: [],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css',
})
export class LoggedInHeaderComponent {
  
  
  flag:boolean = false;
  renderer = inject(Renderer2);
  
  dropdownClick() {
    if(!this.flag)
      {this.renderer.removeClass(document.getElementById('dropdown1'), 'hidden');
    this.renderer.removeClass(document.getElementById('dropdown2'), 'hidden');}
    else
      {this.renderer.addClass(document.getElementById('dropdown1'), 'hidden');
      this.renderer.addClass(document.getElementById('dropdown2'), 'hidden');}
    this.flag = !this.flag;
    console.log(this.flag);
    
  }
}
