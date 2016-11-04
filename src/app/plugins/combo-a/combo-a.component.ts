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
        this.socket.emit('requestFeedVal', {
          path: ['status', 'GuiMode'],
          propName: 'cellularStandard',
          url: device.url + '/feed.kpp?status',
          entityName: device.pluginName,
          current: device.cellularStandard,
          rfStatus: device.rfStatus
        });
      });
    });
    this.socket.on('feedVal', (data) => {
      console.log('dispatching to store', data);
      this.store.dispatch({
        type: REMEMBER_LATEST,
        payload: {
          pluginName: data.entityName,
          propName: data.propName,
          value: data.value
        }
      });
      if (data.propName === 'cellularStandard') {
        const feedName = data.value.toLowerCase() + '_status';
        this.socket.emit('requestFeedVal', {
          path: [feedName, 'Status'],
          propName: 'rfStatus',
          url: data.url.split('?').slice(0, -1).concat([feedName]).join('?'),
          entityName: data.entityName,
          current: data.rfStatus // device.rfStatus // is device avalabile? has isOn, needs this?
        });
      }
    });
  }
  toggleRF(device) {
    console.log('Toggling');
    this.socket.emit('setFeedVal', {
      url: device.url + '/modes/service.kpp?setRFState=' + (device.rfStatus !== 'Running').toString(),
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('destroying');
    // this.socket.disconnect();
  }
}
