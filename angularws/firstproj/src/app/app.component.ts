import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Blog } from './model/Blogs';
// directive => BL + UI
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  //   <h1>Inline template</h1>
  // `,
  // styles:[
  //   `h1{ color:yellow ; background-color:blue; padding:10px}`
  // ]
  styleUrls: ['./app.component.css'], 
  encapsulation: ViewEncapsulation.None
})
// JS file
export class AppComponent implements OnInit{
  title = 'ANGULAR DEMO';
  isValid:boolean = true
  btncolor = 'red'
  bg1 = 'blue'
  div1="demo"
  haserror = false
  messages = {
    'success': !this.haserror,
    'failure': this.haserror,
    'special':this.isValid
  }

  country ='uk.jpeg'

  constructor(){
    console.log('App constructor')
  }
  ngOnInit(): void {
    console.log('App init')
      document.title = 'HEY'
  }

  getData()
  {
    return 10
  }
  clicked()
  {
    alert('clicked')
  }
  changeText(event:any)
  {
    console.log(event)
    console.log('change text', event.target.value)
    this.title = event.target.value
  }
// app.compponent.ts
  newBlog:Blog | undefined
  addBlog(newBlog:any){
    alert('new blog')
    console.log('added new blog in app')
    console.log(newBlog)
    this.newBlog = newBlog
  }
}
