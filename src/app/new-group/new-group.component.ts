import { animate, AnimationEvent, keyframes, style, transition, trigger } from '@angular/animations';
import { identifierName } from '@angular/compiler';
import { Component, ElementRef, HostListener, inject, OnInit, Renderer2, signal, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-group',
  imports: [ReactiveFormsModule],
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter',
        animate('0.3s ease-in-out', keyframes([style({ opacity: 0, offset: 0 }), style({ opacity: 1, offset: 1 })]))
      ),
      transition(':leave',
        animate('0.3s ease-in-out', keyframes([style({ opacity: 1, offset: 0 }), style({ opacity: 0, offset: 1 })]))
      )
    ])
  ]
})
export class NewGroupComponent implements OnInit {

  renderer = inject(Renderer2);
  groupName = new FormControl('');
  personForm: FormGroup;
  isAddingManually = signal(true);
  isInviteLinkActive = signal(false);

  @ViewChild('dropdown', { static: true }) dropdown!: ElementRef;

  flag: boolean = false;

  groupTypeName = 'Home';

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      persons: this.fb.array([])
    });

    this.addPerson();
    this.addPerson();
    this.addPerson();

  }

  selectOption(groupTypeName:string,event:Event){
    this.groupTypeName=groupTypeName;
    this.dropdownClick(event);
  }

  dropdownClick(e: Event) {
    e.stopPropagation();

    if (!this.flag) {
      this.renderer.removeClass(document.getElementById('dropdown1'), 'hidden');
      this.renderer.addClass(document.getElementById('dropdown-button-id'), 'active');
      // this.renderer.removeClass(document.getElementById('dropdown2'), 'hidden');
    } else {
      this.renderer.addClass(document.getElementById('dropdown1'), 'hidden');
      this.renderer.removeClass(document.getElementById('dropdown-button-id'), 'active');
      // this.renderer.addClass(document.getElementById('dropdown2'), 'hidden');
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

  

  get persons(): FormArray {
    return this.personForm.get('persons') as FormArray;
  }

  addPerson() {
    const personGroup = this.fb.group({
      id: Date.now(),
      name: new FormControl(''),
      email: new FormControl('')
    });

    this.persons.push(personGroup);
  }

  removePerson(index: number) {
    this.persons.removeAt(index);
  }

  animation() {
    this.renderer.removeClass(document.getElementById('expand'), 'hidden')
    this.renderer.addClass(document.getElementById('expand'), 'animated-mid')
    this.renderer.addClass(document.getElementById('expand'), 'expand-animation')
  }

  ngOnInit() {
    this.groupName.valueChanges.subscribe(value => {
      let group = document.getElementById('group-name-container-id');
      if (group) {
        if (value && value.length > 0) {
          this.renderer.addClass(group, 'disable-placeholder');
        } else {
          this.renderer.removeClass(group, 'disable-placeholder');
        }
      }
    })


  }

  showInviteLinkComp() {
    this.isAddingManually.set(false);
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.isInviteLinkActive.set(true);
    }
  }

  onAnimation2Done(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.isAddingManually.set(true);
    }

  }

  showAddManuallyComp() {
    this.isInviteLinkActive.set(false);
  }
}
