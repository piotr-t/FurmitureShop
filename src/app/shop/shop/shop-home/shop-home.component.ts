import { ShopService } from './../../shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
/*     this.shopService.getCitis().subscribe(val=>{
    }); */
  }

}
