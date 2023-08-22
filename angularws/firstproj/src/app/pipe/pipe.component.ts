import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  doj:Date = new Date('2020-10-25')
  employee = {id:1, name:'shalini'}
  message:string = 'Hello world'
  score:number = 10

}
