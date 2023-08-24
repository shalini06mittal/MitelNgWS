import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Blog } from '../model/Blogs';
/**
 * REST API call
 * 1. Add HttpClientModule in app.module.ts
 * 2. Inhect HttpClient as a service
 * 3. fetch API => returns an object of type Promise
 * 4. Observable => rxjs
 * observer , subscriber
 */
@Injectable({
  providedIn: 'root'
})
export class HttpblogService {

  url:string = 'http://localhost:3000/blogs'

  constructor(private http:HttpClient) { }
  getBlogs():Observable<Blog[]>{
    console.log('get blogs called')
    return this.http.get<Blog[]>(this.url)
    .pipe(
      map((data:Blog[]) => {
        let blogs:Blog[]=[]
        data.map(blog=> {
          blog.title += " !!"
          blogs.push( blog);
        })
        return blogs
    }))
    ;
  }
  addBlogs(blog:Blog):Observable<Blog>{
    console.log('get blogs called')
    return this.http.post<Blog>(this.url, blog,{
      headers:{'Content-Type':'application/json'},

      
    });
  }
  deleteBlog(id:number):Observable<Blog>{
    console.log('get blogs called')
    return this.http.delete<Blog>(`${this.url}/${id}`);
  }
}
