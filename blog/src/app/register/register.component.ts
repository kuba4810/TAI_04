import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user-service'
import { log } from 'util';
import {AuthService} from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerMessage;
  credentials = {
    name: '',
    email: '',
    password: '',
   };
   

  constructor(public authService: AuthService,private userService: UserService) { 
    
  }

  create() {
    console.log('Rejestruje...');
    console.log('Moje dane to : ',this.credentials);
    
    
    this.authService.createOrUpdate(this.credentials).subscribe((result) => {
      console.log('Odpowiedź po rejestracji: ',result);
      
       return result;
     });
    }
    

  ngOnInit() {
    console.log(localStorage.getItem('token'));
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
