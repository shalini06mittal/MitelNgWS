import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./app.component.css']
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

  ngOnInit(): void {
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
}
