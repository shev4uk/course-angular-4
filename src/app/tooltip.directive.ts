import { Directive,  ElementRef,  HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @HostListener('mouseover') onHover() {
    let span = document.createElement('span');
    span.innerHTML = 'text';
    Object.assign(span.style, {
      position: 'absolute',
      top: '-20px',
      height: '20px',
      backgroundColor: '#333',
      color: '#fff'
    });
    this.el.nativeElement.appendChild(span);
    console.log('hover');
  }

  @HostListener('mouseout') onOut() {
    let span = this.el.nativeElement.querySelector('span');
    this.el.nativeElement.removeChild(span);
    console.log(span);
  }

  constructor(
    private el: ElementRef
  ) { 

    this.el.nativeElement.style.position = 'relative';
  }

}
