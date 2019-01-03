import { Component, OnInit ,Input} from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

import {DataService} from '../../Services/data-service.service'
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  
  @Input() id : String
  @Input() title: String
  @Input() content: String
  @Input() url: String
 


  constructor(private dataService: DataService,private router: Router,private activatedRouter: ActivatedRoute) { }

  errorMessages = {
    title:'',
    description: '',
    url :''
  }

  editMode=false

  checkText=(text)=>{
   
    if(text.length == 0){
      return({"message": "To pole jest wymagane !",valid:false});
    }
    else if( text.length > 0 && text.length <3  ){
      return({"message": "Minimum 3 znaki !",valid:false});
    }
    else{    
      return({'message':'',valid:true})
    }
  }

  titleValidator=(control)=>{

    let result = this.checkText(control.value);
    this.errorMessages.title = result.message;  
   
    if(!result.valid){
      return({'title':result.message})
    }
    else{
      return null;
    }
   
  
  }

  contentValidator=(control)=>{
    let result = this.checkText(control.value);
    this.errorMessages.description = result.message;

    if(!result.valid){
      return({'description':result.message})
    }
    else{
      return null;
    }
  }

  urlValidator=(control)=>{
    let pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    if(control.value.length === 0){
      this.errorMessages.url ='To pole jest wymagane !';         
      return ({'url':false});
    }
    else if (!control.value.match(pattern)){
      this.errorMessages.url ="Podany url jest nieprawidłowy !"
      return ({'url':false});
    } else {
      this.errorMessages.url =""
      console.log("Url poprawny");
      return null;
    }   
  }

  form = new FormGroup({
    title: new FormControl('',this.titleValidator),
    content: new FormControl('',this.contentValidator),
    url: new FormControl('',this.urlValidator)
  });


  ngOnInit() {
   if(typeof(this.id)!=='undefined'){
      this.editMode = true
   }

   console.log(this.id)

  }

  handleSubmit=()=>{
    
    var title = this.form.get("title").value;
    var url = this.form.get("url").value;
    var content = this.form.get("content").value;

    
    var data = {
      title: title,
      url: url,
      content: content
    };

    console.log("Dane do serwera: ",data);

   /*  
   fetch("http://localhost:3000/api/post", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", //
       
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then( (response) => { 
          console.log("Odpowiedź z serwera: ",response);
          //  this.router.navigate(['/blog']);
      }).catch((err)=>{
        console.log("Błąd: ",err);
      });  
  */

     
this.dataService.createPost(data).subscribe(result=>{
  this.router.navigate([`/blog/details/${result}`]);
  console.log("Odpowiedź z serwera: ",result)
});
        
  }

  handleFocus(e){
    console.log(e.target);
  }
}
