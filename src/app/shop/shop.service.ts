import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  subject1 = new Subject();
  subject2 = new Subject();

  constructor() { }

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
}
