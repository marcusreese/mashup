import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as io from 'socket.io-client';
import { TOGGLE_ON_OFF, REMEMBER_LATEST } from '../../shared/reducers/combo-a';

@Component({
  selector: 'app-combo-a',
  templateUrl: './combo-a.component.html',
  styleUrls: ['./combo-a.component.scss']
})
export class ComboAComponent implements OnInit, OnDestroy {
  private socket;
  devices: any;
  constructor(public store: Store<any>) {
    this.devices = store.select('comboA');
    this.socket = io('http://localhost:5000');
    this.devices.subscribe((devices) => {
      devices.map((device) => {
        console.log('for each device:', device.url, device.pluginName);
        this.socket.emit('requestFeedVal', {
          path: ['status', 'GuiMode'],
          propName: 'cellularStandard',
          url: device.url + '/feed.kpp?status',
          entityName: device.pluginName,
          current: device.cellularStandard
        });
      });
    });
    this.socket.on('feedVal', (data) => {
      console.log('UPDATE:', data.update);
      this.store.dispatch({
        type: REMEMBER_LATEST,
        payload: {
          pluginName: data.entityName,
          propName: data.propName,
          value: data.value
        }
      });
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('destroying');
    // this.socket.disconnect();
  }
}
