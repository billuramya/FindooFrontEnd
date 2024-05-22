import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent implements OnInit {
  forgotpassword! : FormGroup;
  submitted=false;
  constructor( private  formBuilder: FormBuilder,private user : UserService ){}
  ngOnInit(): void {
    this.forgotpassword=this.formBuilder.group({
      Email:[''],
      
    })
  }
  onForgot(){
    debugger
    this.submitted=true;
    if(this.forgotpassword.valid){
      let reqData={
        Email:this.forgotpassword.value.Email
        
      }
      this.user.forgot(reqData).subscribe((response:any)=> {
        console.log(response);
        localStorage.setItem("token",response.data);
         //this.route.navigateByUrl("/home/notes")
      });
    }
  }

}
