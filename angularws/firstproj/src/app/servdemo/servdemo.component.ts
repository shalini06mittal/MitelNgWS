import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-servdemo',
  templateUrl: './servdemo.component.html',
  styleUrls: ['./servdemo.component.css'],
  // providers:[DemoService]
})
export class ServdemoComponent {

  constructor(public service : DemoService){
    console.log('service demo componenet constructor')

  }
}
