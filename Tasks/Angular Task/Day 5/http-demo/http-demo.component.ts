import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent{

  public empArr:any[]=[];

  constructor(private httpObj:HttpClient) { }

  getData_click(){
    this.httpObj.get("https://reqres.in/api/users").subscribe((result:any)=>{
        console.log(result);
        this.empArr=result.data;
    })
  }                                    

}
