import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

const ADMIN_ROUTE: Route[]  = [
  {path: 'administrator', component: AdministratorPageComponent, children: [
    {path: 'products', component: AdminProductsComponent},
    {path: 'editProduct/:id' , component: AdminEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTE)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
