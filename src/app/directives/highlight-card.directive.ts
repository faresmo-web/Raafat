import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective implements OnChanges{

  @Input() externalClass:string = 'black'
  @Input('appHighlightCard') defaultColor: string = 'red';

  constructor(private ele:ElementRef) { }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor = this.externalClass;
  }

  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

}
