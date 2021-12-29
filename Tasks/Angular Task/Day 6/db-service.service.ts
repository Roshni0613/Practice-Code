import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';
import { map,filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  url:string="http://localhost:3000/products";

  constructor(private httpObj:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.httpObj.get<Product[]>(this.url);
  }

  getProductById(pid:number):Observable<Product>{
    return this.httpObj.get<Product>(this.url + "/" + pid);
  }

  deleteByProductId(id:number):Observable<Product>{
    return this.httpObj.delete<Product>(this.url + "/" + id);
  }

  updateProduct(productObj:Product):Observable<any>{
    return this.httpObj.put(this.url + "/" + productObj.pid, productObj)
  }

  createProduct(productObj:Product):Observable<any>{
    return this.httpObj.post(this.url, productObj);
  }

  getProductByCategory(category:string):Observable<Product[]>{
    return this.httpObj.get<Product[]>(this.url).pipe(
      map(res => {
        return  res.filter(item => item.category == category);
      }));
  }

  getAllCategory():Observable<string[]>{
    return this.httpObj.get<Product[]>(this.url).pipe(
      map(res=>{
        return res.map(item => { return item.category});
      })
    )
  }

  getProductNameAndPrice():Observable<any[]>
  {
    return this.httpObj.get<Product[]>(this.url).pipe(
      map(res => {
        return res.map(item => {
          return { 	pname: item.pname, price : item.price} });
    })
    );
  }    

  getTokenForUser(uid:string,pwd:string):Observable<any>{
    return this.httpObj.post("http://localhost:3000/login",{"email": uid,   "password": pwd});
  }

}
