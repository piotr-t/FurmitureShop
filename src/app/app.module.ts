import { AdministratorModule } from './administrator/administrator.module';
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
import { NewsComponent } from './news/news.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    MatCardModule,
    MatCheckboxModule,
    ShopRoutingModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    PaginationModule.forRoot(),
    ButtonsModule,
    /**
     * ### Modules childes
     */
    AdministratorModule
  ],
  exports: [

    PaginationModule,
    AppRoutingModule,
    FooterComponent,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    NewsComponent,
    MatExpansionModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
