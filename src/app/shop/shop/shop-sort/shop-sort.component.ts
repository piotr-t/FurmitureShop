import { ShopService } from './../../shop.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-shop-sort',
  templateUrl: './shop-sort.component.html',
  styleUrls: ['./shop-sort.component.scss']
})
export class ShopSortComponent implements OnInit {

  chips = [];
  valOfCheck;

  constructor(private shopService: ShopService) { }



  ngOnInit(): void {
    this.observeAsideCheck();
  }

  observeAsideCheck(): void{
    this.shopService.getCheck1Value().subscribe(val => {
      this.chips = _.compact(_.map(val, (valu, key) => {if (valu === true) {return key; }}));
      this.valOfCheck = val;
    });
    this.shopService.getPrice().subscribe(vp => {
      if (vp.cena && vp.cena !== '') {this.chips.push('cena:' + vp.cena) };
    });
  }

  remove(c): void {
    this.chips.splice(this.chips.indexOf(c), 1);
    this.valOfCheck[c] = false;
    this.shopService.addValFromAside(this.valOfCheck);
    this.shopService.setPriceFromAside('');
  }

}
