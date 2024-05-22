import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { UserService } from '../../Services/user/user.service';
import {response } from 'express';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted=false;
  
  constructor( private  formBuilder: FormBuilder,private user : UserService,private router: Router,private matsnackbar:MatSnackBar ){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.valid){
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.user.login(reqData).subscribe((response:any)=> {
        console.log(response);
        localStorage.setItem("token",response.data);
        this.matsnackbar.open("login Successfull...!",'', {
          duration: 3000
        })
         this.router.navigate(["/dashboard/notes"])
      });
    }
  }
 

}
