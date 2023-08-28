import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Blog } from '../model/Blogs';

@Injectable({
  providedIn: 'root'
})
export class HttpblogService {

  url:string = 'http://localhost:8080/blogs'

  constructor(private http:HttpClient) { }
  getBlogs(email?:string):Observable<Blog[]>{
    console.log('get service', email)
   if(email === undefined){
    console.log('if')
    return this.http.get<Blog[]>(this.url)
    .pipe(
      map((data:Blog[]) => {
        let blogs:Blog[]=[]
        data.map(blog=> {
          blog.title += " !!"
          blog.content = blog.content?.substring(0,50)
          blogs.push( blog);
        })
        return blogs
    }));
  }
    else{
      return this.http.get<Blog[]>(`${this.url}?email=${email}`)
    .pipe(
      map((data:Blog[]) => {
        let blogs:Blog[]=[]
        data.map(blog=> {
          blog.title += " !!"
          blog.content = blog.content?.substring(0,50)
          blogs.push( blog);
        })
        return blogs
    }));
    }
  }
  addBlogs(blog:Blog):Observable<Blog>{
    //console.log('get blogs called')
    let email = sessionStorage.getItem('email');
    
    return this.http.post<Blog>(`${this.url}?email=${email}`, blog,{
      headers:{'Content-Type':'application/json'},
    });
  }
  deleteBlog(id:number):Observable<Blog>{
    //console.log('get blogs called')
    return this.http.delete<Blog>(`${this.url}/${id}`);
  }
  getBlogById(id:number){
    return this.http.get<Blog>(`${this.url}/${id}`);
  }
}
