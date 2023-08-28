import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductformComponent } from './productform/productform.component';

const routes: Routes = [
  {path:'', component:ProductlistComponent},
  {path:'add', component:ProductformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
