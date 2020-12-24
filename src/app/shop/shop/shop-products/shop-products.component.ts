import { ShopService } from './../../shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {

  products;

  constructor(private shopService: ShopService,) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(val => {
      this.products = val;
    });
  }

}
