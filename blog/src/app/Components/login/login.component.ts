import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logIn(e){
    e.preventDefault();

    let data ={
      login : e.target.login.value,
      password: e.target.password.value
    } 

    console.log(data);
    
  }
}
