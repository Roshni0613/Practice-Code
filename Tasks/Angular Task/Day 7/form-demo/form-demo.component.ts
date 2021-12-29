import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  public vehicleForm:FormGroup=new FormGroup({
    oName:new FormControl("",Validators.required),
    contactNo:new FormControl("",[Validators.required,Validators.pattern("\\d{10}")]),
    oEmail:new FormControl("",[Validators.required,Validators.email]),
    vehicleRegNo:new FormControl("",[Validators.pattern("[A-Za-z]{2}\\d{2}[A-Za-z]{2}\\d{4}")]),
    address:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    model:new FormControl("",[Validators.required,Validators.maxLength(10)]),
    color:new FormControl(""),
    year:new FormControl("",Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit_click(){
    alert("Vechile registered successfully" );
    //alert("Vechile with Vehicle Number"+this.vehicleForm.controls['vehicleRegNo'].value+ " registered successfully" );
  }

}
