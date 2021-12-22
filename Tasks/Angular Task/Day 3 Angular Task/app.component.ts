import { Component } from '@angular/core';
import { Product } from './models/Product';
import { Technology } from './models/Technology';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortOption:string="";

  sort_parent(option:string){
    this.sortOption=option;
  }

}
