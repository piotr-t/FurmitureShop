import { Component } from '@angular/core';
import * as _ from 'lodash';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
/*   a: any;
  title = 'furnitureShop';
  ja: any; */
  constructor() {
    setTheme('bs3');
  }


}
