import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public name:string="Roshni";
  public id:number=12345;
  public job:string="Software Engineer";
  public salary:number=90000;
  public deptNo:number=10;
  constructor() {
    console.log("Emp Component constructor");
   }

  ngOnInit(): void {
    console.log("Emp Component OnInitMethod");
  }

}
