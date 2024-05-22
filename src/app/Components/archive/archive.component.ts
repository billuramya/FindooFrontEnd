import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {
  archiveList:any
constructor(private notes:NotesService){}
ngOnInit(): void {
  this.onSubmit()
}
onSubmit(){
  this.notes.getNotes().subscribe((response:any)=>{
    console.log(response);
    this.archiveList=response.data;
    this.archiveList=this.archiveList.filter((Object:any)=>{
      return Object.isArchive==true;
    })
})
}
archive(notes:any){
  let reqData={
    noteid :notes.noteid
  }
  console.log(reqData)
  this.notes.archievNotes(reqData).subscribe((response:any)=>{
    console.log(response);
  })
}
}