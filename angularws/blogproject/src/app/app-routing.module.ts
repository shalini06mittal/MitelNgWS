import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './bloglist/bloglist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';

const routes: Routes = [
  //localhost:4200/
  // localhost:4200/blogs/1/comments
  {path:'', redirectTo:'blogs', pathMatch:'full'},
  {path:'blogs', component:BloglistComponent},
  {path:'blogs/:id', component:BlogdetailsComponent},
  {path:'Login', redirectTo:'login'},// localhost:4200/Login
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'create', component:BlogformComponent},
  {path:'profile', component:ProfileComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations:[
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
