import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// BL
  header:string='MITEL TRAINING'
  constructor(){//public service : DemoService){
    console.log('header constructor')

  }
}
