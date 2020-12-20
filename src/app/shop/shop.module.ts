import { ShopService } from './shop.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';
import { ShopHeaderComponent } from './shop/shop-header/shop-header.component';
import { ShopProductsComponent } from './shop/shop-products/shop-products.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { ShopAsideComponent } from './shop/shop-aside/shop-aside.component';
import { ShopSortComponent } from './shop/shop-sort/shop-sort.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    ShopComponent,
    ShopHomeComponent,
    ShopHeaderComponent,
    ShopProductsComponent,
    ShopAsideComponent,
    ShopSortComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ShopService]
})
export class ShopModule { }
