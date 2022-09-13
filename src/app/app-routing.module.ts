import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';
import { DishlistComponent } from './dishlist/dishlist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path:"dishes",component:DishlistComponent},
  {path:"dishdetails/:id",component:DishdetailsComponent},
  {path:"",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
