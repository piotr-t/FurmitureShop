import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  /**
   * ![hjh](/D:\projects\Angular\furniture\furnitureShop\mineDescriptions\Screenshot(11).png|height=400|width=700)
   * ![hjh](./Screenshot(11).png|height=400|width=700)
   * >>
   * [routing with parameters]( https://www.digitalocean.com/community/tutorials/angular-query-parameters)
   */
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
