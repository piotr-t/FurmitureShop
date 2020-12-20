import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ShopModule } from './shop/shop.module';
import { ShopRoutingModule } from './shop/shop-routing.module';
import {MatCardModule} from '@angular/material/card';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    ShopRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    PaginationModule.forRoot(),
    ButtonsModule
  ],
  exports: [
    PaginationModule,
    AppRoutingModule,
    FooterComponent,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
