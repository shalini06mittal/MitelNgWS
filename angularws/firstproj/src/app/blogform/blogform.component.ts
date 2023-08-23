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
  saveBlog(blogform:any){
    console.log(this.blog)
    console.log(blogform)
    if(blogform.status === 'INVALID')
    {
      alert('Please enter details')
      return;
    }
    console.log(blogform.status)
    console.log(blogform.value)
  }
}
