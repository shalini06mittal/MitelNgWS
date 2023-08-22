import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck, OnInit, OnChanges{

    @Input()
    country:string=''
    @Input()
    employee={name:'dummy'}
    data:any[] =[
      {"country":"uk","states":["London"]},
      {"country":"india","states":["maharashtra", "UP","MP"]},
      {"country":"ireland","states":["ire1","ire2"]},
      {"country":"usa","states":["Illinois","SFO"]}
    ]
    countrystates:any={}
   // called only once
    constructor()
    {
      console.log(`Child constructor=> country : ${this.country}: empname : ${this.employee.name}`)
    }
    // called only once
    ngOnInit(): void {
      console.log(`Child on init=> country : ${this.country}: empname : ${this.employee.name}`)
      this.countrystates = this.data.find(item=> item.country === this.country)
    }
    // is called everytime the values in the any of the input property changes
  ngDoCheck(): void {
    console.log(`Child do check=> country : ${this.country}: empname : ${this.employee.name}`)
  }
  // is called everytime the values in the property of type primitive changes
    ngOnChanges(changes: SimpleChanges): void {
      console.log(`Child on changes=> country : ${this.country}: empname : ${this.employee.name}`)
      this.countrystates = this.data.find(item=> item.country === this.country)
    }

}








 