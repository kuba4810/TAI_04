import { Component, OnInit,Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DataService} from '../../Services/data-service.service'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html', 
  styleUrls: ['./blog.component.css']
})
@Injectable()
export class BlogComponent implements OnInit {

  @Input('filterText') filterText: string;
  posts: any
  url: "https://jsonplaceholder.typicode.com"


  constructor(private dataService: DataService,private router: Router,private activatedRouter: ActivatedRoute) { 
   
  }



  ngOnInit() {
    
  /*    this.activatedRouter.queryParams.subscribe(params => {
    	this.filterText = params['title'];
    });  */


    let loaderContainer = document.getElementById("loaderContainer");
    this.dataService.getAll().subscribe(result=>{
      this.posts = result;
      loaderContainer.remove();

    });
 
   /*  var loader = document.getElementById("loaderContainer");
    var blogItems = document.querySelectorAll(".blogItem");
    fetch("../../assets/posts.json")
    .then(response => response.json())
      .then(response => { 
          this.posts = response; console.log(response);
         
          loader.remove();
      }); */
  }

}
