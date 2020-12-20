import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopHomeComponent } from './shop/shop/shop-home/shop-home.component';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent, children: []},
  { path: 'goToShop', pathMatch: 'full', redirectTo: '/shop'},
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
