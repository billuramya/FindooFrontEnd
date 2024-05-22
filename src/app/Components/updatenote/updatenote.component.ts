import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit {
title:any
description:any
id:any
 color:any;
constructor(
  @Inject(MAT_DIALOG_DATA) public data : any,
  public dialogbox : MatDialogRef<UpdatenoteComponent>,
  private notes : NotesService){
    this.title=data.title,
    this.description=data.description,
    this.id=data.noteId,
   this.color=data.color
  }
  ngOnInit(): void {
    
  }
  closeDialog(){
    let reqData={
      title:this.title,
     description:this.description,
     color:this.color
    }
    this.notes.updateNotes(reqData,this.id).subscribe((response:any)=>{
      console.log(response)
      this.dialogbox.close();
      
    })
  }
}
