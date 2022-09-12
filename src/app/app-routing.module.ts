import { CartsComponent } from './carts/components/carts/carts.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "products", component:AllProductsComponent},
  {path:"details", component:ProductsDetailsComponent},
  {path:"cart", component:CartsComponent},
  {path: "**", redirectTo:"products", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
