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

  // onSubmit(event) {
  //   event.preventDefault();
  //   console.log('form submit happened');
  // }
  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  pluginFormAccept($event, dropdown, textInput, plugin) {
    $event.preventDefault();
    let payload: any = {
      pluginTitle: textInput.value,
      pluginName: textInput.value
    };
    switch (dropdown.value) {
      case 'url':
        payload.pluginType = 'url';
        payload.url = textInput.value.split(' ')[0];
    }
    console.log('url:', payload.url);
    this.store.dispatch({
      type: ADD_PLUGIN,
      payload: payload
    });
    textInput.value = '';
  }

  ngOnInit() {
  }

}
