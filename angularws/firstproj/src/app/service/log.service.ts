import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  logInfo(info:string){
    console.log(info)
  }
}
