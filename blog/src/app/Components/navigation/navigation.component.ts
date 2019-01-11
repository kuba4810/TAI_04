import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../Services/auth.service'
import {ActivatedRoute, Router} from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService,public router: Router) { }

  ngOnInit() {
    
  }
  logOut() {
    console.log('Wylogowywuje...');
    
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
   }

   isLoggedIn(){
     return this.authService.isLoggedIn();
   }
   
}
