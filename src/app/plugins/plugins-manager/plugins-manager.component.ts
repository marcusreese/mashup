import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-plugins-manager',
  templateUrl: './plugins-manager.component.html',
  styleUrls: ['./plugins-manager.component.scss']
})
export class PluginsManagerComponent implements OnInit {

  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  ngOnInit() {
  }

}
