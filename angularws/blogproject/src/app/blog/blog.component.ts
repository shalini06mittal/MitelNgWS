import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../model/Blogs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{
  @Input()
  blog:Blog | undefined
 
  constructor(){
   
  }


}
