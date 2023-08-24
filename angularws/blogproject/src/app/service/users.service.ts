import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
//localforage
export class UsersService {

  url:string = 'http://localhost:3000/users'
  constructor(private http:HttpClient) { }

  validateUser(username:string){
    return this.http.get<User[]>
    (`${this.url}?username=${username}`);
  }
  logoutUser(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('username');
  }
  isLoggedIn()
  {
    if(sessionStorage.getItem('username'))
      return true;
    return false
    //!!sessionStorage.getItem('username') // how boolean works in javascript
  }
  getUsername(){
    return sessionStorage.getItem('username')
  }
}
