import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective implements OnChanges{

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }
  admin:string[]=["Scott","Smith","Robert","Mark"];

  @Input()
  appIsAdmin:string="";

  
  ngOnChanges(){
    if(this.appIsAdmin == "Scott"|| this.appIsAdmin == "Smith"||this.appIsAdmin == "Robert"||this.appIsAdmin == "Mark")
    {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.viewContainer.clear();
    }
  }
  }


 
