import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  @Input()
  category:string="";

  productArrByCategory:Product[]=[];

  productArr:Product[]=[
    {pid:101,pname:"Samsung Galaxy",price:1200,category:"Electronics",qty:12},
    {pid:102,pname:"Seimens Dishwasher",price:1200,category:"Electronics",qty:34},
    {pid:103,pname:"OnePlus Phone",price:1200,category:"Electronics",qty:7},
    {pid:104,pname:"Sony TV",price:1200,category:"Electronics",qty:5},
    {pid:105,pname:"FBB Kurta",price:1200,category:"Clothing",qty:16},
    {pid:106,pname:"Sugar Pink Lipstick",price:1200,category:"Cosmestics",qty:19},
    {pid:107,pname:"Zara Shirts",price:1200,category:"Clothing",qty:67},
    {pid:108,pname:"BT12 Merch",price:1200,category:"Toys",qty:904},
    {pid:109,pname:"Mickey Mouse Soft toy",price:1200,category:"Toys",qty:45},

  ];
  
  

  getProductByCategory(){
    this.productArrByCategory=[];
    this.productArr.forEach(p=>{
      if(p.category==this.category)
        this.productArrByCategory.push(p);
    })
  }

}
