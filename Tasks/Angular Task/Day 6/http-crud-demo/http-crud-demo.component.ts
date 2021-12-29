import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

import { DbService } from '../db-service.service';
import { Product } from '../model/Product'

@Component({
  selector: 'app-http-crud-demo',
  templateUrl: './http-crud-demo.component.html',
  styleUrls: ['./http-crud-demo.component.css']
})
export class HttpCrudDemoComponent implements OnInit {

  constructor(private dbService:DbService) { }

  ngOnInit(): void {
    this.getProduct_click();
  }

  pid:number=0;
  pname:string="";
  price:number=0;
  qty:number=0;
  category:string="";
  isDisabled:boolean=false;
  productArr:Product[]=[];
  selectedCategory:string="";
  listOfCategory:string[]=[];
  productNameAndPrice:any[]=[];
  url:string="http://localhost:3000/products";
  

  addProduct_click(){
    let p1:Product=new Product(this.pid,this.pname,this.price,this.category,this.qty);
    this.dbService.createProduct(p1).subscribe( (response:any) =>{
      console.log("New Product added to the server ");
      alert("New Product with added to the server ");
      this.clearField();
      this.getProduct_click();
    });
  }


  getProduct_click (){
    if(this.selectedCategory!=""){
        this.dbService.getProductByCategory(this.selectedCategory).subscribe(
          (response:Product[])=>this.productArr=response
        )
    }else{
    this.dbService.getAllProducts().subscribe((response:Product[])=>{
      this.productArr=response;
    })
  }
  }

  product_update(){
    let productObj:Product = new Product(this.pid,this.pname,this.price,this.category,this.qty);
      this.dbService.updateProduct(productObj).subscribe( (response:any) =>{
        console.log("Product Id "+this.pid+" updated in the server");
        alert("Product Id "+this.pid+" updated in the server");
        this.clearField();
        this.getProduct_click();
      });
  }

  delete_click(pid:number){
    this.dbService.deleteByProductId(pid).subscribe( (response:any) =>{
      console.log("Product Id "+pid+" deleted from the server");
      alert("Product Id "+pid+" deleted from the server");
      this.getProduct_click();  
    });  
  }

  select_click(pid:number){
    this.dbService.getProductById(pid).subscribe( (response:any) =>{

      let product:any = response;
      console.log(product);
      this.pid=product.pid;
      this.pname=product.pname;
      this.price=product.price;
      this.qty=product.qty;
      this.category=product.category;
      this.isDisabled=true;
    });
   
    
  }

  listOfCategory_click(){
    this.dbService.getAllCategory().subscribe((response:string[])=>this.listOfCategory=response);
  }

  productNameAndPrice_click(){
    this.dbService.getProductNameAndPrice().subscribe((response:any[])=>{
      this.productNameAndPrice=response;
      console.log(response);
    })
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
