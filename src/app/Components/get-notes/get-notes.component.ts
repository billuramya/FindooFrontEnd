import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
})
export class GetnotesComponent implements OnInit {
  constructor(private notes:NotesService){}
  notesArray:any
   ngOnInit(): void {
     this.onSubmit()
   }
   onSubmit(){
    console.log("Hello");
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("stored to arry variable")
      console.log(this.notesArray);
    })
   }
   createdNoteDisplay($event:any){
    console.log("Added notes Refresh");
    this.onSubmit();
   }
   updateRefresh($event:any){
    console.log("updated Notes" +$event);
    this.onSubmit();
   }

  
  
}