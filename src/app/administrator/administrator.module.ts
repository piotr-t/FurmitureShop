import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {MatTableModule} from '@angular/material/table';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

/**
 * #### Used
 * * TableModule
 * >>
 * * AdministratorPage
 *  * AdminHeader
 */
@NgModule({
  declarations: [
    AdministratorPageComponent,
    AdminProductsComponent,
    AdminHeaderComponent,
    AdminEditComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatTableModule
  ]
})
export class AdministratorModule { }
