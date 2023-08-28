import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { products } from '../database/data';
import { ProdService } from '../service/prod.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductlistComponent implements OnInit {

  products:any[] = [];
  prodsubs? : Subscription

  prodObserver = {
    next: (data:any[]) => { 
      console.log('next data arrived');
      console.log(data.length)
      this.products = data
      
    },
    error : (err:any) => console.log(err),
    complete:()=> console.log('completed')
  }

  constructor(private ps:ProdService){}
  ngOnInit(): void {
    console.log('on init list')
      //this.products = this.ps.getProducts()
      this.prodsubs = this.ps.Product$.subscribe(this.prodObserver)

  }
  delProduct(id:number){

    this.ps.deleteProduct(id)

  }
}
