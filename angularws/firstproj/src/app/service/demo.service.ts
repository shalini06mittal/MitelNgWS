import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string
  constructor(private service:LogService) {
    console.log('service constructor')
    this.message='Inside the service'
   }
   
   transaction(user:any, amout:number)
   {
      this.service.logInfo('transaction begins')
      // tx logic
      this.service.logInfo('transaction ends')
   }
}
