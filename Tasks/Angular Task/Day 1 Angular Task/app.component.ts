import { Component } from '@angular/core';
import { Product } from './models/Product';
import { Technology } from './models/Technology';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public arrayTechnologies:string[]=["Angular", "React", "Node JS", "Express"];

  public productArr:Product[]=[
    {pid:101,pname:"Samsung A2",price:10000,category:"Mobile Phone",qty:4},
    {pid:102,pname:"BT21 Merch",price:6000,category:"Toys",qty:10},
    {pid:103,pname:"Face Mask",price:500,category:"Beauty",qty:50},
    {pid:104,pname:"LG Dishwasher",price:90000,category:"Electronics",qty:1},

  ];

  public techList:Technology[]=[
    {title:"Angular",des:"Angular is a TypeScript-based free and open-source web application framework",image:"./assets/angular.jfif"},
    {title:"React",des:"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. ",image:"./assets/react.png"},
    {title:"Node JS",des:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment ",image:"./assets/nodejs.png"},
    {title:"BootStrap",des:"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",image:"./assets/bootstrap.png"},
    {title:"CSS",des:"CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",image:"./assets/css.png"},
    {title:"HTML",des:"HTML is the standard markup language for documents designed to be displayed in a web browser.",image:"./assets/html.jfif"}
  ];
}
