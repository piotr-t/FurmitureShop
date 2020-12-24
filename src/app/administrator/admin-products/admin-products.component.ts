import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

  /**
   * ### Used
   * * #### mat-table
   */
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, AfterViewInit {


/**
 * _pagination scope, default is 1_
 */
  paginationNumber = 1;
/**
 * scope who divide dataSource
 */
  paginationScope = 10;
  paginationCount = [];

  allProducts = [];
  sortFlag = false;

  /**
   * #### mat-table
   * _all products from adminService, set in onInit_
   */
  dataSource;
  dataSource1;

  /**
   * #### mat-table
   * _Array to display column includes in dataSource_
   */
  displayedColumns: string[] = ['name', 'category', 'news', 'cena', 'edit'];

/**
 * * #### Params
 *  * adminService
 */
  constructor(private adminService: AdminService) {}



  /**
   * Lifehooks
   *
   * * ##### get products from AdminService {@link http://bl.ocks.org/mbostock/4341574| this example}
   */
  ngOnInit(): void {
    this.getProductsFromService();
  }
  ngAfterViewInit(): void{
  }


  /**
   * @Description Get all products from adminService and set dataSource as products
   *
   * * set dataSource
   * * set pagination scope
   * * divide poduct array
   */
  getProductsFromService(): void{
    this.adminService.getProducts().subscribe((val: [any]) => {
      this.dataSource1 = val;
      this.dataSource1 = this.dataSource1.map((vall, index) => {this.dataSource1[index].id = index + 1; return vall; });
      this.divideDataSource(this.dataSource1);
      this.dividePage();
    });
  }

  divideDataSource(ds: [any]): void{
    this.paginationCount = [];
    const addScope = ds.length % this.paginationScope === 0 ? 0 : 1;
    const paginC = Math.floor(ds.length / this.paginationScope) + addScope;
    for (let i = 1;  i <= paginC; i++) {
      this.paginationCount.push(i);
    }
  }

/** Implement in template adminProduct\
 * _ClickEvent, Edit button_
 */
  editButton(i: any): void{
    console.log(i);
  }

dividePage(): void{
  const itemEnd = (this.paginationScope * this.paginationNumber);
  const itemStart = itemEnd - this.paginationScope;
  this.dataSource = this.dataSource1.slice(itemStart, itemEnd);
}

  setPageNumber(item): void{
    this.paginationNumber = item;
    this.dividePage();
  }


  sortProducts(): void{
    const firstSort = () => { this.dataSource = this.dataSource1.sort((a, b) => a.id - b.id ); this.sortFlag = true; };
    this.sortFlag ? this.dataSource1 = this.dataSource1.reverse() : firstSort();
    console.log(this.dataSource1);
    this.divideDataSource(this.dataSource1);
    this.dividePage();

  }
}

