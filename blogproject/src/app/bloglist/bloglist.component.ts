import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Blog } from '../model/Blogs';
import { HttpblogService } from '../service/httpblog.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit, OnDestroy{
  //blogs:Blog[] ;
  blogs:Observable<Blog[]>
  subs:Subscription = new Subscription()
  show = false
  // to do some basic initialization
  constructor(private blogservice:HttpblogService, private route:ActivatedRoute ){
    //this.blogs= [];
    this.blogs = new Observable();
  }
 
// comples ==x or long running code
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(param=>{
        if(param['email']){
          this.blogs = this.blogservice.getBlogs(param['email']);
          if(param['email'] === sessionStorage.getItem('email'))
            this.show = true;
          else 
            this.show=false
        }
        else
        this.blogs = this.blogservice.getBlogs();
    })
    
    // .subscribe(data=> {
    //  console.log('data')
    //   this.blogs=data
    // })
  }
  ngOnDestroy(): void {
    console.log('destroy');
    //unsubscribe
    this.subs.unsubscribe()
    
  }
}
