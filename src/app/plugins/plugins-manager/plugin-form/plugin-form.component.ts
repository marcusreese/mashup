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
    const textInputs: any = textInput.value.split(' ');
    const title = textInputs.slice(1).join(' ');
    let payload: any = {
      pluginInput: textInput.value,
      pluginTitle: title,
      pluginName: title
    };
    switch (dropdown.value) {
      case 'url':
        payload.pluginType = 'url';
        payload.url = textInputs[0];
            break;
      case 'combo-a':
        payload.pluginType = 'combo-a';
    }
    this.store.dispatch({
      type: ADD_PLUGIN,
      payload: payload
    });
    textInput.value = '';
  }

  ngOnInit() {
  }

}
