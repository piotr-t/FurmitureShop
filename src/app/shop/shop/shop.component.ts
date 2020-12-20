import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  fromAsideCheck1;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toogleProductComponent(e): void{
    e ? this.router.navigate(['./'], { relativeTo: this.route }) : this.router.navigate(['./products'], { relativeTo: this.route });
  }

}
