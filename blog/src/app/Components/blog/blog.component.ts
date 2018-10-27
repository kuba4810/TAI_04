import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: []

  constructor() { 
   
  }


  ngOnInit() {

    fetch("../../assets/posts.json")
    .then(response => response.json())
      .then(response => { this.posts = response; console.log(response) });
  }

}
