import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DataService} from '../../Services/data-service.service'


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html', 
  styleUrls: ['./blog.component.css']
})
@Injectable()
export class BlogComponent implements OnInit {

  filterText: string
  posts: any
  url: "https://jsonplaceholder.typicode.com"


  constructor(private dataService: DataService) { 
   
  }

  ngOnInit() {
    this.dataService.getAll().subscribe(result=>{
      this.posts = result;
    });
 /*
    var loader = document.getElementById("loaderContainer");
    var blogItems = document.querySelectorAll(".blogItem");
    fetch("../../assets/posts.json")
    .then(response => response.json())
      .then(response => { 
          this.posts = response; console.log(response);
         
          loader.remove();
      });*/
  }

}
