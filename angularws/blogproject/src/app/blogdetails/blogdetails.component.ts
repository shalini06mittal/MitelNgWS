import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpblogService } from '../service/httpblog.service';
import { Blog } from '../model/Blogs';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit{

  id:number = 0
  blog:Blog | undefined;
  constructor(private route:ActivatedRoute, private bs:HttpblogService){
    console.log(route)
    this.route.params.subscribe(param=> {
      console.log(param)
      this.id = parseInt(param['id'])
    })

  }
  ngOnInit(): void {
   this.bs.getBlogById(this.id)
   .subscribe(blog=> this.blog = blog)
  }


}
