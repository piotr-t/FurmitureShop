import { Component, OnInit } from '@angular/core';
import {news} from './../shop/shop-config';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = news;

  constructor() { }

  ngOnInit(): void {
  }

}
