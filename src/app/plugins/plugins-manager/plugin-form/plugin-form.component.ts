import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnInit {
  // plugin = {
  //   ip: '12.3.4.5'
  // }
  @Input()
  plugin: any;

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
