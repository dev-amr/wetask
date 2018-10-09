import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';
@Directive({
  selector:'[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.show') isOpen = false;
  constructor(private el: ElementRef){}

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;

  }


}
