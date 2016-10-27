import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_PLUGIN } from '../../../shared/reducers/plugins';

@Component({
  selector: 'app-plugin-form',
  templateUrl: './plugin-form.component.html',
  styleUrls: ['./plugin-form.component.scss']
})
export class PluginFormComponent implements OnInit {

  @Input()
  plugin: any;

  submitted = false;
  // onSubmit(event) {
  //   event.preventDefault();
  //   console.log('form submit');
  // }
  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  pluginFormAccept($event) {
    $event.preventDefault();
    this.submitted = true;
    this.store.dispatch({
      type: ADD_PLUGIN,
      payload: {
        pluginTitle: 'Hello World',
        pluginName: 'hello-world'
      }
    });

  }

  ngOnInit() {
  }

}
