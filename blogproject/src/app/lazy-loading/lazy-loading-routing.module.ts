import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogformComponent } from '../blogform/blogform.component';

const routes: Routes = [
  {path:'', component:BlogformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
