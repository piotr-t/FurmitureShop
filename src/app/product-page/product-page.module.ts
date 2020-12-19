import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [ProductHomeComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class ProductPageModule { }
