
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShopProductsComponent } from './shop/shop-products/shop-products.component';
import { ShopHomeComponent } from './shop/shop-home/shop-home.component';

const APP_ROUTES: Route[] = [

  // {path: 'homeShop', component: ShopHomeComponent}
];

const SHOP_ROUTES: Route[] = [

  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent, children: [
    {path: '', component: ShopHomeComponent},
    {path: 'products', component: ShopProductsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(SHOP_ROUTES)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
