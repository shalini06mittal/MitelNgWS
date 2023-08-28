import { Injectable } from '@angular/core';
import { products } from '../database/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  private productlist:any[]
  // a type of subject that emits a default value or last emitted value
  Product$ : BehaviorSubject<any[]>;

  constructor() {
    this.productlist = products
    this.Product$ = new BehaviorSubject<any[]>(this.productlist);
   }

  getProducts(){
    console.log('get from service', this.productlist.length)
    return this.productlist;
  }
  addProduct(product:any){
    let id = products.length + 1
    product.id = id
    // this.productlist.push(product)
    // changing the reference
    this.productlist = [...this.productlist, product]
    console.log(this.productlist)
    this.Product$.next(this.productlist)
    return product;
  }
  deleteProduct(id:number){
    // let index = this.productlist.findIndex(prod => prod.id === id)
    // this.productlist.splice(index, 1)
    this.productlist = this.productlist.filter(prod => prod.id !== id)
    console.log(this.productlist)
    // emitting this updated list
    this.Product$.next(this.productlist)
    return true
  }
}
