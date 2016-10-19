import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  gridOptions = {
    limit_to_screen: true,
    visible_rows: 6,
    visible_cols: 6,
    max_cols: 6,
    auto_resize: true,
    min_width: 20,
    margins: [10, 10, 0, 0]
  };

  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  ngOnInit() {
  }

}
