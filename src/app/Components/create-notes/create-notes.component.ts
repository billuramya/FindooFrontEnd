import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';
import { title } from 'process';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent implements OnInit {
  @Output() refreshEvent=new EventEmitter<string>();
  notesForm!:FormGroup;
  submitted=false;
  display:boolean=true;
  token:any;
  constructor(private formBuilder : FormBuilder,private notes:NotesService,private activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.notesForm=this.formBuilder.group({
      title:[''],
      description:['']
    })
  }
  addNotesForm(){
    
    this.submitted = true;
    if (this.notesForm.valid) {
      const reqData = {
        title: this.notesForm.value.title,
        description: this.notesForm.value.description
      };
      console.log(reqData);
      this.notes.addNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.refreshEvent.emit(response);
      });
    }
    this.display=true;
  }
 

}
