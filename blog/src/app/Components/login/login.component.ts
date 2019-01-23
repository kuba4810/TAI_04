import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-service'
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import { AuthService } from '../../Services/auth.service'
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

  logged = false;
  logout = false;

  serverResponse = ''
  constructor(public authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {

    // console.log(localStorage.removeItem('token'));

    if (localStorage.getItem('token')) {
      this.router.navigate([`/`]);
    }
  }

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
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
}
