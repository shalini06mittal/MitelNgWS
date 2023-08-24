import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';
import { User } from '../model/Users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isError:boolean = false;
  errmsg:string=''

  constructor(private us:UsersService, private router:Router){}

  
  public onSubmit(user:any): void {
    console.log(user)
    this.us.validateUser(user.username)
    .subscribe(resp =>{
      console.log(resp)
      if(resp.length>0){
       if(user.password === resp[0].password){
          let obj:any = resp[0]
          console.log('success')
          sessionStorage.setItem('id', obj.id)
          sessionStorage.setItem('username', obj.username)
          this.isError=false;
          this.router.navigate([''])
        }
        else{
          this.isError = true
          this.errmsg = 'Invalid Credentials'
        }
      }
      else{
        this.isError = true
        this.errmsg = 'User does not exist, please register'
      }
    })
    // .subscribe({
    //   next: resp:User[] => {
    //     if(user.password === resp[0].password)
    //     { 
    //       console.log('success')
    //     }
    //   },
    //   error: err=> console.log('error',err),
    //   complete:()=> console.log('complete')
    // })
    
    
  }
}
