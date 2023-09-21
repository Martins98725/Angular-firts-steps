import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRexd]'
})
export class RexdDirective {

  constructor(private el: ElementRef) { 
      el.nativeElement.style.color = '#e35e6b'
  }

}
