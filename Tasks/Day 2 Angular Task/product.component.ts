import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  pid:number=0;
  pname:string="";
  price:number=0;
  qty:number=0;
  category:string="";
  message:string="";
  isDisabled:boolean=false;

  public productArr:Product[]=[];
  

  addProduct_click(){
    let p1:Product=new Product(this.pid,this.pname,this.price,this.category,this.qty);
    this.productArr.push(p1);
    this.clearField();
  }

  product_update(){
    let index=this.productArr.findIndex(p=>p.pid==this.pid);
    this.productArr[index].pname=this.pname;
    this.productArr[index].category=this.category;
    this.productArr[index].qty=this.qty;
    this.productArr[index].price=this.price;
    this.message="Updated Successfully"
    this.clearField();
  }

  delete_click(pid:number){
    let index=this.productArr.findIndex(p=>p.pid==pid);
    this.productArr.splice(index,1);
    this.message="Product Deleted Successfully"
  }

  select_click(pid:number){
    let product:any=this.productArr.find(p=>p.pid==pid);
    console.log(product);
    this.pid=product.pid;
    this.pname=product.pname;
    this.price=product.price;
    this.qty=product.qty;
    this.category=product.category;
    this.isDisabled=true;
  }

  clearField(){
    this.isDisabled=false;
    this.pid=0;
    this.pname="";
    this.price=0;
    this.qty=0;
    this.category="";
  
  }
}
