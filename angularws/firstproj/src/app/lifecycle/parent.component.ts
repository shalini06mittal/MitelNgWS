import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  show:boolean = false
  pcountry:string='india'
  employee = {name:'Shalini'}
  constructor()
  {
    console.log(`Parent constructor=> country : ${this.pcountry}: empname : ${this.employee.name}`)
  }
  ngOnInit(): void {
    console.log(`Parent on init=> country : ${this.pcountry}: empname : ${this.employee.name}`)
  }

}
