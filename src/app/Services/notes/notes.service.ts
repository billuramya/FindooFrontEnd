import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }
  addNote(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:7086/api/Notes/CreateNotes',reqData,true,header);
  }
  getNotes(){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:7086/api/Notes/GetAllNotes',true,header);
  }
  trashNotes(reqData: any) {
    const noteid=reqData.noteid;
   const header = {
     headers: new HttpHeaders({
       'Content-type': 'application/json',
       'Authorization': 'Bearer ' + this.token
     })
   };
   return this.httpService.putService(`https://localhost:7086/api/Notes/IsTrash?noteid=${noteid}`, reqData, true, header);
 }
 archievNotes(reqData:any){
   const noteid=reqData.noteid;
   const header={
     headers:new HttpHeaders({
       'Content-type':'application/json',
       'Authorization':'Bearer '+this.token
     })
   }
   return this.httpService.putService(`https://localhost:7086/api/Notes/IsAchive?noteid=${noteid}` ,reqData, true, header);
 }
 updateNotes(reqData:any,noteId:any){
  
  const header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService(`https://localhost:7086/api/Notes/UpdateNotesById?noteid=${noteId}` ,reqData, true, header);
}
changeColor(reqData:any){
  console.log(reqData)
  const header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService('https://localhost:7086/api/Notes/ChangeColor?noteId='+reqData.noteid+'&color='+reqData.color,{}, true, header);

}
 

 
}





