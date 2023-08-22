import { Component, OnInit } from '@angular/core';
import { Blog } from '../model/Blogs';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit{

  blogs:Blog[]
  // to do some basic initialization
  constructor(){
    this.blogs=[]
  }
// comples ==x or long running code
  ngOnInit(): void {
      // RESt API
      this.blogs = [
        {id:1,title:'Marine Drive',content:'A place in mumbai which is serene',created:new Date(),category:'Beaches', imgurl:'https://media.istockphoto.com/id/1008831236/photo/panoramic-view-of-marine-drive-at-dusk-mumbai-india.jpg?s=612x612&w=0&k=20&c=gZ_wmR5bWHCnbeGsXaXxPcv1XTmfGsYVcrzNzIr-aOY='},
        {id:2,title:'Statue Of Unity',content:'A place in Gujarat',created:new Date(),category:'Tourism',imgurl:'https://dummyimage.com/640x360/fff/aaa'},
        {id:3,title:'Mobile boon or curse',content:'It depends on the usage',created:new Date(),category:'Technology', imgurl:'https://dummyimage.com/640x360/fff/aaa'}
      ]
  }
  callBlog(){
    return `<app-blog [blog]="b" [message]="'Some message'"></app-blog>`
  }
}
