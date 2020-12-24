import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import * as _ from 'lodash';
import { ShopService } from '../../shop.service';
import {firstList} from './../../shop-config';

@Component({
  selector: 'app-shop-aside',
  templateUrl: './shop-aside.component.html',
  styleUrls: ['./shop-aside.component.scss']
})
export class ShopAsideComponent implements OnInit {

/**
 *  toggleProductComponent
 */
  toggleProductComponent;
  serchVal;
  checked;
  formObject = {};
  valFromSelect = '';
  wrongInput = false;
  panelOpenState = false;

  firstSelect = firstList;

    secondSelect = [];
    wojewodztwa = [];

  formGro;
  formGro1 =  new FormGroup({
    cena: new FormControl('', Validators.pattern('^[0-9]*\.?[0-9]+\,?[0-9]*')), // https://kursjs.pl/kurs/regular/regular.php
    cenaMin: new FormControl('', Validators.pattern('^[0-9]*\.?[0-9]+\,?[0-9]*')),
    cenaMax: new FormControl('', Validators.pattern('^[0-9]*\.?[0-9]+\,?[0-9]*')),
  });


  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getsValueFromService();
  }

  getsValueFromService(): void {
    this.firstSelect.map(mapVal => {this.formObject[mapVal.firstSelection] = new FormControl(false); });
    this.formGro = new FormGroup(this.formObject);
    this.shopService.getCheck1Value().subscribe(val => {
      this.check2();
      _.forEach(val, (v, k) => {this.formObject[k] = new FormControl(v); });
      this.formGro = new FormGroup(this.formObject);
    });

    this.shopService.getPrice().subscribe(vp1 => {
      vp1.cena ? this.valFromSelect = vp1.cena : this.valFromSelect = ''; });
  }

  check2(): void{
    if (this.formGro1.value.cena !== '' || _.includes(this.formGro.value, true)) {
      this.router.navigate(['./products'], { relativeTo: this.route });
      setTimeout(() => {
        this.shopService.addValFromAside(this.formGro.value);
        this.shopService.setPriceFromAside(this.formGro1.value);
      }, 10);
    }else{
      this.router.navigate(['./'], { relativeTo: this.route });
    }
  }

  showCheck(e): void{
this.check2();
this.shopService.addValFromAside(this.formGro.value);
if (this.formGro1.status === 'VALID') {
  this.shopService.setPriceFromAside(this.formGro1.value);
  this.wrongInput = false;
} else {// alert('niepoprawny format ceny');
        this.wrongInput = true; }


  }
/**
 * Description decyduje o wuświetlaniu warunkowym zagłębionej listy
 * line 40  shop-aside.component.html
 * @method expression
 * @param fs using fs1
 * @return boolean Description this.formGro.value[fs.firstSelection];
 *  @tutorial tutorial-1
 *  @link https://github.com GitHub
 */
  expression(fs): boolean{
    return this.formGro.value[fs.firstSelection];
  }

}
