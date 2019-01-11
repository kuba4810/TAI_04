import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user-service'
import {ActivatedRoute, Router} from '@angular/router';
import { log } from 'util';
import {AuthService} from '../../Services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    login: '',
    password: ''
   };
   
  serverResponse =''
  constructor(public authService: AuthService,private userService: UserService,private router: Router) { }

  ngOnInit() {

    // console.log(localStorage.removeItem('token'));
    
    if(localStorage.getItem('token')){
      this.router.navigate([`/`]);
    }
  }

  signIn() {
    console.log('Rozpoczynam logowanie ...')
    console.log('Moje dane to : ',this.credentials);
    
    return this.authService.authenticate(this.credentials).subscribe((result) => {
            console.log('Odpowiedź z logowania: ',result);
            
            if (!result) {
                this.logged = false;
            } else {
                this.logout = false;
                this.credentials = {
                    login: '',
                    password: ''
                };
                this.router.navigate(['/']);
            }
        });
 }
 
 
/* 
  logIn(e){
    this.serverResponse = ''
    e.preventDefault();


    let data ={
      login : e.target.login.value,
      password: e.target.password.value
    } 

    let response : any;
    console.log(data);
    this.userService.logIn(data).subscribe(result=>{
      console.log('Odpowiedź z serwera: ',result);
      response = result;
      if(response.token){
        this.serverResponse = 'Udało się zalogować :D'
        localStorage.setItem('userToken',response.token);
        
        setTimeout(()=>{
          this.router.navigate([`/`]);
        },500);

      }if(response.statusText === 'Unauthorized'){
        this.serverResponse = 'Nie udało się zalogować :/'
      }
    });
  } */
}
