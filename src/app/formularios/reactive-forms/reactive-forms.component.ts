import { Component } from '@angular/core';
import { FormArray,FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';

interface userModel{
  email:string;
  password:string;
  city:string;
  state:string;
  zip:string;
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  emailControl=new FormControl('',[Validators.required]);
  passwordControl= new FormControl('',[]);
 cityControl= new FormControl('',[Validators.required]);

 userForm=new FormGroup({
email:this.emailControl,
password:this.passwordControl,
city:this.cityControl,

 });

  userModel:FormGroup;

   constructor(private fb:FormBuilder){
   this.userModel =this.fb.group({
     email:[''],
     password:[''],
     city:[''],
     state:[''],
     zip:[''],


    });

  }
}
