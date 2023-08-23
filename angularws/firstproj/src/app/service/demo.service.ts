import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string
  constructor() {
    console.log('service constructor')
    this.message='Inside the service'
   }
}
