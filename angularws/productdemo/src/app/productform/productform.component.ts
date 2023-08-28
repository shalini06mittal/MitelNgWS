import { Component } from '@angular/core';
import { ProdService } from '../service/prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {

  constructor(private ps:ProdService, private router:Router){}
  insertProduct(data:any){

    let prod = this.ps.addProduct(data);
    console.log(prod)
    this.router.navigate([''])
  }
}
