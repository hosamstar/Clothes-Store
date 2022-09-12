import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';



@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartsComponent
  ]
})
export class CartsModule { }
