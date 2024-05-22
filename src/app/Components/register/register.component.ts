import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private user: UserService){}

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:['']

    })

  }

  onRegister(){
    this.submitted=true;
    if(this.registerForm.valid){
      let reqData={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.user.register(reqData).subscribe((response:any) =>{
        console.log("Register Successfuly");
        console.log(response);
        localStorage.setItem("token",response.data)
      });
    }
  }

}
