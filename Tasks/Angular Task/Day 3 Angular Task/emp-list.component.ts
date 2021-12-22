import { Component, Input, OnChanges } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnChanges{

  @Input()
  sortOption:string="";

  empList:Employee[]=[
    {name:"Roshni",id:101,job:"Engineer",salary:90000,deptNo:10},
    {name:"Mahi",id:102,job:"Manager",salary:67000,deptNo:11},
    {name:"Namjoon",id:103,job:"CEO",salary:789000,deptNo:111},
    {name:"Jungkook",id:141,job:"Opeartions",salary:50000,deptNo:21},
    {name:"Jimin",id:567,job:"HR",salary:57000,deptNo:43},
    {name:"Taehyung",id:671,job:"Manager",salary:86000,deptNo:11},
    {name:"Jin",id:341,job:"IT Support",salary:34000,deptNo:67},
  ];
 

ngOnChanges(){
  switch (this.sortOption) {
    case "id":
      this.empList=this.empList.sort((e1,e2)=>e1.id-e2.id);
      break;
      case "name":
        this.empList=this.empList.sort((e1,e2)=>{
          if(e1.name>=e2.name)
            return 1;
          else 
            return -1;
        });
      break;
      case "job":
        this.empList=this.empList.sort((e1,e2)=>{
          if(e1.job>=e2.job)
            return 1;
          else 
            return -1;
        });
    
      break;
      case "salary":
        this.empList=this.empList.sort((e1,e2)=>e1.salary-e2.salary);
      break;
      case "deptNo":
        this.empList=this.empList.sort((e1,e2)=>e1.deptNo-e2.deptNo);
      break;
  
    default:
      break;
  }

}

  
}
