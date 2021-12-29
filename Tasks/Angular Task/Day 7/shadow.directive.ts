import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  @Input() appShadow:string ="";

  constructor(private element:ElementRef) {
  }


  ngOnInit(): void {

    if (this.appShadow == "")
    {
      this.appShadow  = "White"; 
    }

    this.element.nativeElement.style.boxShadow = "3px 2px "+this.appShadow;
  }

}
