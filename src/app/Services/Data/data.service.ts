import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }
  private messageSorce = new BehaviorSubject([]);
  IncomingData=this.messageSorce.asObservable();
  
  outgoingData(message : any){
    console.log(message);
    this.messageSorce.next(message);
  }
}
