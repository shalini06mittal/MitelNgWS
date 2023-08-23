import { Component } from '@angular/core';
import { Blog } from '../model/Blogs';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {

  blog:Blog ;
  constructor(){
    this.blog = {title:''}
  }
  saveBlog(blog:any){
    if(blog.status === 'INVALID')
    {
      alert('Please enter details')
      return;
    }
    console.log(blog.status)
    console.log(blog.value)
  }
}
