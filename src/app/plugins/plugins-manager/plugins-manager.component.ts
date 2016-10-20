import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugins-manager',
  templateUrl: './plugins-manager.component.html',
  styleUrls: ['./plugins-manager.component.scss']
})
export class PluginsManagerComponent implements OnInit {
  model = {
    ip: '12.3.4.5'
  }
  submitted = false;
  onSubmit(event) {
    event.preventDefault();
    this.submitted = true;
  }
  btnClick($event) {
    $event.preventDefault();
  }

  constructor() { }

  ngOnInit() {
  }

}
