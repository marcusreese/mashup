import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-combo-a',
  templateUrl: './combo-a.component.html',
  styleUrls: ['./combo-a.component.scss']
})
export class ComboAComponent implements OnInit {

  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  ngOnInit() {
  }

}
