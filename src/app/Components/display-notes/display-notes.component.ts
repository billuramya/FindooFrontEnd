import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../Services/Data/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit {
  @Input() notesList:any;
  
  filterNote: any;
  // subscription!: Subscription;
constructor(public dialog :MatDialog ,private dataService:DataService ){}
@Output() updateEvent=new EventEmitter<string>();
message:any;
ngOnInit(): void {
   this.dataService.IncomingData.subscribe((response) => {
    console.log("Search in process", response);
    this.filterNote = response;
  })
}

editNoteDialogBox(notes : any){
const dialogbox = this.dialog.open(UpdatenoteComponent,{
  width:'40%',
  height:'auto',
  data:notes
})
dialogbox.afterClosed().subscribe(result =>{
  console.log(result);
  this.updateEvent.emit(result);
  
})
}
receivedRefreshEvent($event:any){
console.log("icon to display"+$event);
this.message=$event;
}
}
