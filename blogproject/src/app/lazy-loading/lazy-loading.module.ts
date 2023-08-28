import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { BlogformComponent } from '../blogform/blogform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogformComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule, FormsModule
  ]
})
export class LazyLoadingModule { }
