import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Blog } from '../model/Blogs';
import { HttpblogService } from '../service/httpblog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit{
  blogs:Blog[];

  // to do some basic initialization
  constructor(private blogservice:HttpblogService){
    this.blogs=[]
  }
 
// comples ==x or long running code
  ngOnInit(): void {
    this.blogservice.getBlogs()
    .subscribe(data=> this.blogs = data)
  }
}
