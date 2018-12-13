import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../Services/data-service.service'
import {FilterPipe} from '../../pipes'

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls : ['./blog-details.component.css']
 
})
export class BlogDetailsComponent implements OnInit {

  id
  post: any
  isLoaded = false
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService) {
    activatedRoute.paramMap.subscribe(params => {
        this.id = params.get("id");
        console.log("Id: ",this.id);
       
/*
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
            });*/
           
    });
   }

  ngOnInit() {
    this.dataService.getPost(this.id).subscribe(result=>{
      this.post = result;
      this.isLoaded = false;
    });
  }

  showEditForm(){
    let editPostForm = document.querySelector('.editPostRow');
    let blogDetailsRow = document.querySelector('.blogDetailsRow');

    blogDetailsRow.classList.add('fadeOutLeft');

  setTimeout(()=>{
    editPostForm.classList.remove('invisible');
    editPostForm.classList.add('fadeInDown');
  },500)

  }

}
