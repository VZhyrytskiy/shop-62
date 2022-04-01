import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {
  @Input('hightlight') weight!: number;
  @HostBinding('style.color') color!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseIn() {
    this.setFontWeight(this.weight);
    this.color = '#673ab7';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.setFontWeight(400);
    this.color = 'black';
  }
  
  setFontWeight(value: number | string): void {
    this.el.nativeElement.style.fontWeight = value;
  }

}
