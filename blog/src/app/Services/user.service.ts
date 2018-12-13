/* import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {Token} from '../../models/token';


@Injectable()
export class AuthService {

   private url = 'http://localhost:3000/api';

   constructor(private http: HttpClient) {
}

authenticate(credentials) {
   return this.http.post(this.url + '/user/auth', {
       login: credentials.login,
       password: credentials.password
   }).map((result: Token) => {
       if (result && result.token) {
           localStorage.setItem('token', result.token);
           return true;
       }
       return false;
   }).catch(error=>{
       console.log(error);
   });
}


}
 */