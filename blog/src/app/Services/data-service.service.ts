import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

     url = "http://localhost:3000/api"
    constructor(private http: HttpClient){
        
    }

    getAll(){
        console.log("Działa");
        return this.http.get(this.url + '/posts');     
    }

    getPost(postId){
        return this.http.get(`${this.url}/posts/${postId}`)
    }
}