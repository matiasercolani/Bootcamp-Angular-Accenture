import { EventEmitter,Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()

  // myObservable1$:Observable<any> = new Observable();

  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('AAAA');

  constructor() { 
    setTimeout(()=>{
      this.myObservable1$.next('AAAA')
    },1000)

    setTimeout(()=>{
      this.myObservable1$.next('AAAA')
    },1000)
  }

  private listenAllEvents():void{

  }
}
