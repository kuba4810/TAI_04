import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  errorMessages = {
    firstName:'',
    lastName: '',
    email :'',
    gender:''
  }

  showErrors = false;


  checkText=(text)=>{
   
    if(text.length == 0){
      return({"message": "To pole jest wymagane !",valid:false});
    }
    else if( text.length > 0 && text.length <3  ){
      return({"message": "Minimum 3 znaki !",valid:false});
    }
    else if( text.length >25  ){
      return({"message": "Maksimum 25 znaków !",valid:false});
    }
    else if(text.length > 0 && text.length <=25 ){
    
      return({'message':'',valid:true})
    }
  }

  firstNameValidator=(control)=>{

    let result = this.checkText(control.value);
    this.errorMessages.firstName = result.message;  
   
    if(!result.valid){
      return({'firstName':result.message})
    }
    else{
      return null;
    }
   
  
  }

  lastNameValidator=(control)=>{
    let result = this.checkText(control.value);
    this.errorMessages.lastName = result.message;

    if(!result.valid){
      return({'lastName':result.message})
    }
    else{
      return null;
    }
  }

  emailValidator=(control)=>{
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
   
    if(control.value.length == 0){
      this.errorMessages.email ='To pole jest wymagane !';
         
      return ({'email':false});

    } else if (!control.value.match(filter)){
      this.errorMessages.email ="Podany E-mail jest nieprawidłowy !"
      return ({'email':false});
    } else {
      this.errorMessages.email =""
      console.log("Email poprawny");
      return null;
    }   
  }
 


  form = new FormGroup({
    firstName: new FormControl('',this.firstNameValidator),
    lastName: new FormControl('',this.lastNameValidator),
    email: new FormControl('',this.emailValidator)
  });

  onSubmit=()=> {
    this.showErrors = true;
    // TODO: Use EventEmitter with form value
    console.log(this.form.valid);    

  }

  clearForm=()=>{
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
