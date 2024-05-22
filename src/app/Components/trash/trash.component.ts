import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { cwd } from 'process';
import { response } from 'express';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit {
trashList:any;
constructor(private notes:NotesService){}
ngOnInit(): void {
  this.onSubmit()
}
onSubmit(){
  this.notes.getNotes().subscribe((response:any)=>{
    console.log(response);
    this.trashList=response.data;
    this.trashList=this.trashList.filter((Object:any)=>{
      return Object.isTrash===true;
    })
})
}
restore(notes:any){
  let reqData={
    noteid :notes.noteid
  }
  console.log(reqData)
  this.notes.trashNotes(reqData).subscribe((response:any)=>{
    console.log(response);
  })
}
}
