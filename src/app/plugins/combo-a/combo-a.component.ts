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
      devices.forEach((device) => {
        if (device.pluginType !== 'bsr') {
          return;
        }
        this.socket.emit('requestFeedVal', {
          path: ['status', 'GuiMode'],
          propName: 'cellularStandard',
          url: device.url + '/feed.kpp?status',
          deviceName: device.pluginName,
          current: device.cellularStandard,
          rfStatus: device.rfStatus
        });
      });
    });
    this.socket.on('feedVal', (data) => {
      this.store.dispatch({
        type: REMEMBER_LATEST,
        payload: {
          pluginName: data.deviceName,
          propName: data.propName,
          value: data.value
        }
      });
      // We're dispatching too often: console.log('dispatching to store', data);
      // TODO: Move following to node adapterplugin.
      if (data.propName === 'cellularStandard') {
        const feedName = data.value.toLowerCase() + '_status';
        // TODO: Convert this to requestFeedVals instead of requesting same feed twice.
        this.socket.emit('requestFeedVal', {
          path: [feedName, 'Status'],
          propName: 'rfStatus',
          url: data.url.split('?').slice(0, -1).concat([feedName]).join('?'),
          deviceName: data.deviceName,
          current: data.rfStatus // device.rfStatus // is device avalabile? has isOn, needs this?
        });
        this.socket.emit('requestFeedVal', {
          path: [feedName, 'Band'],
          propName: 'band',
          url: data.url.split('?').slice(0, -1).concat([feedName]).join('?'),
          deviceName: data.deviceName,
          current: data.rfStatus
        });
      }
    });
  }
  toggleRF(device) {
    console.log('Trying to toggle', device.pluginTitle);
    if (device.pluginType === 'bsr') {
      this.socket.emit('setFeedVal', {
        url: device.url + '/modes/service.kpp?setRFState=' + (device.rfStatus !== 'Running').toString()
      });
    } else {
    //   const turnOffWhistle = {
    //     "clientId": "14",
    //     "requests": [
    //       {
    //         "channel": "/wstl",
    //         "data": {
    //           "type": "pause-range",
    //           "requestId": "43"
    //         }
    //       }
    //     ]
    //   };
    //   // const turnOffWhistle = '{"clientId":"14", "requests":[{"channel":"/wstl", "data":{"type":"pause-range", "msg":{"sourceId":0, "range":{"startFreq":"1870000000", "endFreq":"1930000000", "rangeID":"1"}}}, "requestId":"26"}]}';
    //   this.socket.emit('sendPost', {
    //     url: 'http://whistle07:8888/WstlGui/Wstl', //http://whistle07:8888/#wstl-just-analyzer
    //     data: turnOffWhistle
    // });

    }
  }
  space(band) {
    if (band) {
      return band.replace(/MHz/, ' MHz');
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('destroying');
    // this.socket.disconnect();
  }
}
