import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {}

  @HostListener('click') onClicks() {
    this.bkgrndCol('green');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.bkgrndCol('white');
  }

  private bkgrndCol(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
