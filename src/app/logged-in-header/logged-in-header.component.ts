import { Component, ElementRef, HostListener, inject, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logged-in-header',
  imports: [],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css',
})
export class LoggedInHeaderComponent {
  @ViewChild('dropdown', { static: true }) dropdown!: ElementRef;

  flag: boolean = false;
  renderer = inject(Renderer2);

  dropdownClick(e:Event) {
    e.stopPropagation();
    
    if (!this.flag) {
      this.renderer.removeClass(document.getElementById('dropdown1'), 'hidden');
      this.renderer.removeClass(document.getElementById('dropdown2'), 'hidden');
    } else {
      this.renderer.addClass(document.getElementById('dropdown1'), 'hidden');
      this.renderer.addClass(document.getElementById('dropdown2'), 'hidden');
    }
    this.flag = !this.flag;
    console.log(this.flag);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target) && this.flag) {
      this.dropdownClick(event);
    }
  }
}
