import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
    // To change label's font color and other properties
    el.nativeElement.style.color = "red";
    el.nativeElement.style.fontWeight = "bolder";
    el.nativeElement.style.border = "2px double black";
  }


}
