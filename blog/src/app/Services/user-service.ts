import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable()
export class UserService{

     url = "http://localhost:3000/api"

      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
    constructor(private http: HttpClient){
        
    }

    createOrUpdate(data){
        console.log('Create or update... : ',data);
        return this.http.post('http://localhost:3000/api/user/create',{data: JSON.stringify(data)},{headers: this.httpOptions.headers});
        
    }   

    logIn(data){
        console.log('Login... : ',data);
        return this.http.post(this.url + '/user/auth',{data: JSON.stringify(data)},{headers: this.httpOptions.headers})
        
    }

 /*    getAll(){
        console.log("Działa");
        return this.http.get(this.url + '/posts');     
    }

    getPost(postId){
        return this.http.get(`${this.url}/posts/${postId}`)
    }

    createPost(data){
        return this.http.post(`http://localhost:3000/api/post`,{data: JSON.stringify(data)},{headers: this.httpOptions.headers});
    } */
}