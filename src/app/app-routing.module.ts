import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishlistComponent } from './dishlist/dishlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"dishes",component:DishlistComponent},
  {path:"",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
