import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component'
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  // Route = object of array;
 
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:'product',  component: ProductsComponent},
  {path: 'cart', component:CartComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
