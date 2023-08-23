import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-servchild',
  templateUrl: './servchild.component.html',
  styleUrls: ['./servchild.component.css']
})
export class ServchildComponent {

  constructor(public service:DemoService){}
}
