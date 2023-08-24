import { Component, EventEmitter, Output } from '@angular/core';
import { Blog } from '../model/Blogs';
import { HttpblogService } from '../service/httpblog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent {
  constructor(private bs:HttpblogService, private router:Router){
  }
  saveBlog(blogform:any){
    console.log(blogform)
    if(blogform.status === 'INVALID')
    {
      alert('Please enter details')
      return;
    }
    //save blog
    this.bs.addBlogs(blogform.value)
    .subscribe(resp => this.router.navigate(['']))

  }
}
