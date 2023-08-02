import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //pasa dato de action-list a form-edit
  trackEdit: EventEmitter<any> =  new EventEmitter<any>();
  //pasa dato de form-edit a action-list
  changeTrack: EventEmitter<any> =  new EventEmitter<any>();
  
  constructor() { }

}