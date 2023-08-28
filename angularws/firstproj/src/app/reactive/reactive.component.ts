import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
// ReactiveFormsModule
export class ReactiveComponent {

  name:FormControl = new FormControl('Shalini')
  fgGroup: FormGroup ;
  username:FormControl;
  constructor(){
    // console.log(this.name)
    this.username= new FormControl('', [Validators.required, Validators.minLength(5)])
    this.fgGroup = new FormGroup({
      username:this.username,
      email:new FormControl('dummy', Validators.required),
      city:new FormControl('dummy', Validators.required),
    });
    console.log(this.fgGroup)
  }

}
