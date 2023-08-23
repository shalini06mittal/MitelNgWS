import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isError:boolean = false;
  errmsg:string=''
  public onSubmit(user:any): void {
    console.log(user)
    
  }
}
