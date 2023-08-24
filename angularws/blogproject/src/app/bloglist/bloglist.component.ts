import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Blog } from '../model/Blogs';
import { HttpblogService } from '../service/httpblog.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit, OnDestroy{
  blogs:Blog[];
  subs:Subscription = new Subscription()
  // to do some basic initialization
  constructor(private blogservice:HttpblogService){
    this.blogs=[]
  }
  ngOnDestroy(): void {
    console.log('destroy');
    //unsubscribe
    this.subs.unsubscribe()
    
  }
 
// comples ==x or long running code
  ngOnInit(): void {
    let obs = this.blogservice.getBlogs()
    this.subs= obs.subscribe(data=> this.blogs = data)
  }
}
