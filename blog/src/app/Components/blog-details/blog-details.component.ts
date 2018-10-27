import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  template : `
              <div> 
                 <h2>{{post.text}}</h2>
                 <img src={{post.image}} />
                 <h3>{{post.content}} </h3>
              </div>
             `
})
export class BlogDetailsComponent implements OnInit {

  id
  post: {
        id:'',
        image:'',
        text:'',
        content: ''
      }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get("id");
        console.log("Id: ",this.id);

        fetch("../../assets/posts.json")
        .then(response => response.json())
          .then(response => {
            console.log("Posty",response);
              response.forEach(element => {
                if(element.id == this.id){
                  this.post = element;
                }
              });
             console.log(this.post);
            });
    });
   }

  ngOnInit() {
  }

}
