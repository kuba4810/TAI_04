import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

     url = "https://jsonplaceholder.typicode.com"
    constructor(private http: HttpClient){
        
    }

    getAll(){
        console.log("Działa");
        return this.http.get(this.url + '/photos');     
    }

    getPost(postId){
        return this.http.get(`${this.url}/photos/${postId}`)
    }
}