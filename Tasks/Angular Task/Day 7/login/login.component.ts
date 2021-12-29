import { Component, OnInit } from '@angular/core';
import { DbService } from '../db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  uid:string  = "";
    pwd:string  = "";
    result:string  = "";

    constructor(private dbService: DbService) {
    }

    login_click()
    {
      this.dbService.getTokenForUser(this.uid, this.pwd)
        .subscribe(
        (response:any) => {
              console.log(response.accessToken);
        });
    }

}
