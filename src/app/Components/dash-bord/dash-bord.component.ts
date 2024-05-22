import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/Data/data.service';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrl: './dash-bord.component.scss'
})
export class DashBordComponent implements OnInit {
  constructor(private route:Router,private data:DataService){}
  ngOnInit(): void {
    
  }
  trash(){
    console.log('trash')
    this.route.navigate(['/dashboard/trash'])
  }
  archive(){
    console.log('archive')
    this.route.navigate(['/dashboard/archive'])
  }
  note(){
    console.log('notes')
    this.route.navigate(['/dashboard/notes'])
  }
  search(event:any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }

}
