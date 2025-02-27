import { Component, ElementRef, EventEmitter, HostListener, inject, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-picker-component',
  imports: [],
  templateUrl: './date-picker-component.component.html',
  styleUrl: './date-picker-component.component.css'
})
export class DatePickerComponentComponent {
@Output() closeDiv = new EventEmitter();
@ViewChild('dropdown', { static: true }) dropdown!: ElementRef;

  flag = {
    'calenderDropdown':false,
    'calenderDropdown2':false,
  };
  renderer = inject(Renderer2);

  dropdownClick(event:MouseEvent) {
    event.stopPropagation();
    const e = event.target as HTMLElement;
    console.log(e);
    
    if(e.id == 'calender-dropdown') {
      if (!this.flag.calenderDropdown) {
        this.renderer.removeClass(document.getElementById('calender-dropdown'), 'hidden');
      } else {
        this.renderer.addClass(document.getElementById('calender-dropdown'), 'hidden');
      }
    }

    if(e.id == 'calender-dropdown2') {
      if (!this.flag.calenderDropdown2) {
        this.renderer.removeClass(document.getElementById('calender-dropdown2'), 'hidden');
      } else {
        this.renderer.addClass(document.getElementById('calender-dropdown2'), 'hidden');
      }
    }

    this.toggleFlag(e.id);
    console.log(this.flag);
  }

  toggleFlag(dropdownId: string): void {
    if(dropdownId === 'calender-dropdown') {
      this.flag.calenderDropdown = !this.flag.calenderDropdown;
    } else if(dropdownId === 'calender-dropdown2') {
      this.flag.calenderDropdown2 = !this.flag.calenderDropdown2;
    }
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target) && this.flag) {
      this.dropdownClick(event);
    }
  }
}
