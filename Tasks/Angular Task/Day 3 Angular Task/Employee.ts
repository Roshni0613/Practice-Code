export class Employee{
  public name:string;
  public id:number;
  public job:string;
  public salary:number;
  public deptNo:number;
  constructor(name:string="",id:number=0,job:string="",salary:number=0,deptNo:number=0) {
    this.name=name;
    this.id=id;
    this.job=job;
    this.salary=salary;
    this.deptNo=deptNo;
  
   }
}