import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private us:UsersService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept')
    console.log(request)
    let reqclone = request;
    if(this.us.isLoggedIn()){
      console.log('yes')
      let token = sessionStorage.getItem('token')
      console.log(token)
       reqclone = request.clone({
        headers: request.headers.set("Authorization",
                    "Bearer " + token)
      })
    }
    return next.handle(reqclone);
  }
}
