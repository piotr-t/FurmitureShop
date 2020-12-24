import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator-page',
  templateUrl: './administrator-page.component.html',
  styleUrls: ['./administrator-page.component.scss']
})
export class AdministratorPageComponent implements OnInit {

/**
 * flag set admin\
 * _If true Admin logged_
 */
admin: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toogleAdmin(): void{
    this.admin = !this.admin;
  }

}
