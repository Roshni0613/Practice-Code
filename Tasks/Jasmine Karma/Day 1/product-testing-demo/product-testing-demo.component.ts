import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-testing-demo',
  templateUrl: './product-testing-demo.component.html',
  styleUrls: ['./product-testing-demo.component.css']
})
export class ProductTestingDemoComponent  {

  
  pname:string="";
  unitPrice:number=0;
  qty:number=1;
  result:number=0;
  isVisible:boolean=false;

  getTotalAmount(){
    this.result=this.unitPrice*this.qty;
    this.isVisible=true;
  }

  
  clearField(){
    this.isVisible=false;
    this.pname="";
    this.unitPrice=0;
    this.qty=1;  
  }

}
