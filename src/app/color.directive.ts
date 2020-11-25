import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') color: string;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {
    console.log(this.color);
    this.el.nativeElement.style.color = this.color;
  }

}
