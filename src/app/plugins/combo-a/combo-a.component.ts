import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as io from 'socket.io-client';
import { TOGGLE_ON_OFF } from '../../shared/reducers/combo-a';

@Component({
  selector: 'app-combo-a',
  templateUrl: './combo-a.component.html',
  styleUrls: ['./combo-a.component.scss']
})
export class ComboAComponent implements OnInit, OnDestroy {
  private socket;

  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('comboA');
    this.socket = io('http://localhost:5000');
    // TODO: do the following line for each external system's url and name
    this.socket.emit('requestFeedVal', {
      propName: 'guiMode',
      url: 'someUrl',
      entityName: 'map'
    });
    this.socket.on('feedVal', (data) => {
      this.store.dispatch({
        type: TOGGLE_ON_OFF,
        payload: {
          pluginName: data.entityName,
          toToggle: 'isOn'
        }
      });
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('destroying');
    this.socket.disconnect();
  }
}
