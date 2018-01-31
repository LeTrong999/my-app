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


    onClick(){
      this.name = " Le Trong";
      this.hobbies.push('New Hobby')
    }
    addHobby(hobby){
        this.hobbies.unshift(hobby);
        return false;
    }

    deletehobby(hobby){
        console.log(hobby);return false;
        for(let i=0; i < this.hobbies.length;i++){
            if(this.hobbies[i] == hobby){
                this.hobbies.splice(i,1);
            }
        }
    }

    interface Address{
    street:string,
    city:string,
    state:string,
}

}
