import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gchild',
  templateUrl: './gchild.component.html',
  styleUrls: ['./gchild.component.css']
})
export class GchildComponent implements OnDestroy{

  constructor(){
    console.log('Grand Child constructor')
  }
  ngOnDestroy(): void {
      console.log('grand child on destroy')
  }
}
