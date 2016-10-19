import { Component, OnInit } from '@angular/core';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@Component({
  selector: 'app-hlr',
  templateUrl: './hlr.component.html',
  styleUrls: [
    './hlr.component.scss',
    // '../../../../node_modules/primeng/resources/themes/omega/theme.css',
    // '../../../../node_modules/primeng/resources/primeng.min.css'
  ]
})
export class HlrComponent implements OnInit {
  cars = [
    {
      vin: '123',
      year: '1234',
      brand: 'brandX',
      color: 'red'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
