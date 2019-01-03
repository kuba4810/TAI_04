import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user-service'
import { log } from 'util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMessage;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
  }


  register(e){
    e.preventDefault();

    let data ={
      name : e.target.login.value,
      email : e.target.mail.value,
      password: e.target.password.value
    } 

    console.log(data);
    
    this.userService.createOrUpdate(data).subscribe(result=>{
      console.log('Odpowiedź z serwera: ',result);
      let response : any;
      response = result
      if(response.userId){
        this.registerMessage = 'Udało się zarejestrować :D'
      }
    });
  }
}
