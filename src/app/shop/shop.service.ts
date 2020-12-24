import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as data from './../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  subject1 = new Subject();
  subject2 = new Subject();
  subject3 = new BehaviorSubject(data);

  headers = {};
  baseUrl = 'https://bdl.stat.gov.pl/api/v1/units?';

  constructor(private http: HttpClient) { }


  getProducts(): any{
    return this.subject3.asObservable();
  }

  addValFromAside(val): any{
    this.subject1.next(val);
  }

  getCheck1Value(): any{
    return this.subject1.asObservable();
  }

  setPriceFromAside(val): any{
    this.subject2.next(val);
  }
  getPrice(): any{
    return this.subject2.asObservable();
  }


  getCitis(): any{
    return this.http.get<any>(this.baseUrl);
  }



}
