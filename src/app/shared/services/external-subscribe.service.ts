import { Injectable, OnInit } from '@angular/core';
// import * as io from 'socket.io-client';
// import { Store } from '@ngrx/store';

@Injectable()
export class ExternalSubscribeService implements OnInit {
  // private socket;

  constructor() {
    // this.socket = io('http://localhost:5000');
    // this.socket.emit('requestFeedVal', { propName: 'guiMode', url:'someUrl' });
    // this.socket.on('feedVal', (data) => {
    //   console.log('got data on client:', data.val.bool);
    // });
  }

  ngOnInit() {
    // Not showing (but OnInit makes constructor work)
    console.log('hi2 from service');

  }
}
