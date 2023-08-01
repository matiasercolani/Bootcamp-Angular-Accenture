import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  trackEdit: EventEmitter<any> =  new EventEmitter<any>();
  constructor() { }
}