import { Component, EventEmitter, Output } from '@angular/core';
import { Blog } from '../model/Blogs';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {
  constructor(){
  }
  saveBlog(blogform:any){
    console.log(blogform)
    if(blogform.status === 'INVALID')
    {
      alert('Please enter details')
      return;
    }
    //save blog
  }
}
