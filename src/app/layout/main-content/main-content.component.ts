import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as io from 'socket.io-client';
// import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/take';
import { REMEMBER_LATEST } from '../../shared/reducers/combo-a';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit, OnDestroy {
  gridOptions = {
    // limit_to_screen: true,
    visible_rows: 6,
    visible_cols: 6,
    max_cols: 6,
    auto_resize: true,
    min_width: 20,
    margins: [10, 10, 0, 0],
    prefer_new: true
  };

  // sampleItemConfigA = {
  //   'row': 1,
  //   'col': 1,
  //   'sizex': 2,
  //   'sizey': 2
  // };
  //
  // sampleItemConfigB = {
  //   'row': 1,
  //   'col': 4,
  //   'sizex': 2,
  //   'sizey': 2
  // };

  private socket;
  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
    this.socket = io('http://localhost:5000');
    this.socket.on('feedVal', (data) => {
      this.store.dispatch({
        type: REMEMBER_LATEST,
        payload: {
          pluginName: data.deviceName,
          propName: data.propName,
          value: data.value
        }
      });
    });
  }

  allRF(bool) {
    this.store.select('comboA').take(1).subscribe((devices: any) => {
      devices.map(device => {
        if (device.pluginType === 'bsr') {
          this.socket.emit('setFeedVal', {
            url: device.url + '/modes/service.kpp?setRFState=' + bool
          });
        }
      });
    });
  }

  ngOnInit() {
  }


  ngOnDestroy() {
    // console.log('destroying combo');
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

}
