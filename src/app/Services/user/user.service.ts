import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService  {
  token : any

  constructor( private httpService : HttpService) { }
  login(reqData: any){
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',

      })
    }
      return this.httpService.postService('https://localhost:7086/api/User/login',reqData,false,header)
    
  }
  register(reqData:any){
    let header ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
      return this.httpService.postService('https://localhost:7086/api/User/UserRegister' ,reqData,false,header)
    
  } 
  forgot(reqData:any){
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
    })
  }
  return this.httpService.postService('https://localhost:7086/api/User/ForgotPassword?Email='+reqData.Email,{},false,header)
  }
}
