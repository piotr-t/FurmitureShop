import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

/**
 * #### Get all products from assets
 * _implement in administratorProducts_
 */
  getProducts(): Observable<any>{
    return this.http.get('./../../assets/products.json');
  }
}
