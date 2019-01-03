import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user-service'
import {ActivatedRoute, Router} from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  serverResponse =''
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {

    // console.log(localStorage.removeItem('userToken'));
    
    if(localStorage.getItem('userToken')){
      this.router.navigate([`/`]);
    }
  }

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
        this.router.navigate([`/`]);
      }if(response.statusText === 'Unauthorized'){
        this.serverResponse = 'Nie udało się zalogować :/'
      }
    });
  }
}
