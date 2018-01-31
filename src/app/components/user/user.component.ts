import { Component, OnInit } from '@angular/core';
import {Address} from "cluster";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tittle = "hello";
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;


  constructor() {
      console.log('contructor...');
  }

  ngOnInit() {
      console.log('ngOnInit');
      this.name = 'John Doe';
      this.age = 30;
      this.email = 'letrong1109@gmail.com';
      this.address = {
         street:'86/33 Âu Cơ street',
         city : 'Hồ Chí Minh',
         state: 10
      };
      this.hobbies = ['write code','watch movie','Listen to music'];
      this.hello = 'hello';
  }

  interface Address{
      street:string,
      city:string,
      state:string,
  }
}
