import { Observable } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import * as _ from 'lodash';
import { ShopService } from '../../shop.service';

@Component({
  selector: 'app-shop-aside',
  templateUrl: './shop-aside.component.html',
  styleUrls: ['./shop-aside.component.scss']
})
export class ShopAsideComponent implements OnInit {

  @Output()
  Prop = new EventEmitter();

  @Output()
  Prop1 = new EventEmitter();

  toggleProductComponent = true;
  serchVal;
  checked;
  formObject = {};
  valFromSelect = '';
  wrongInput = false;

  firstSelect = ['kuchnia', 'salon', 'łazienka', 'sypialnia'];

  formGro;
  formGro1 =  new FormGroup({
    cena: new FormControl('', Validators.pattern('^[0-9]*\.?[0-9]+\,?[0-9]*')) // https://kursjs.pl/kurs/regular/regular.php
  });


  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.firstSelect.map(mapVal => {this.formObject[mapVal] = new FormControl(false); });
    this.formGro = new FormGroup(this.formObject);
    this.shopService.getCheck1Value().subscribe(val => {
      _.forEach(val, (v, k) => {this.formObject[k] = new FormControl(v); });
      this.formGro = new FormGroup(this.formObject);
    });
    this.shopService.getPrice().subscribe(vp1 => {
      vp1.cena ? this.valFromSelect = vp1.cena : this.valFromSelect = ''; });
  }

  setAllert(): void {
    this.toggleProductComponent = !this.toggleProductComponent;
    this.Prop.emit(this.toggleProductComponent);
  }

  togEvent(ev): void{
    ev.value === '' ? this.Prop.emit(true) : this.Prop.emit(false);
  }

  showCheck(): void{
this.shopService.addValFromAside(this.formGro.value);
if (this.formGro1.status === 'VALID') {
  this.shopService.setPriceFromAside(this.formGro1.value);
  this.wrongInput = false;
} else {// alert('niepoprawny format ceny');
        this.wrongInput = true; }


  }

  expression(fs): boolean{
    console.log(this.formGro.value[fs]);
    return this.formGro.value[fs];
  }

}
