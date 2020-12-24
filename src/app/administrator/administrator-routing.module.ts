import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

const ADMIN_ROUTE: Route[]  = [
  {path: 'administrator', component: AdministratorPageComponent, children: [
    {path: 'products', component: AdminProductsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTE)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
