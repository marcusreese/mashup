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
      pluginInput: textInput.value,
      pluginType: dropdown.value
    };
    switch (dropdown.value) {
      case 'bsr':
        payload.rfOn = false;
        // fall through to include url stuff also
      case 'url':
        const textInputs: any = textInput.value.split(' ');
        const title = textInputs.slice(1).join(' ').trim() || textInputs[0].split('//')[1];
        payload.pluginTitle = title;
        payload.pluginName = title;
        payload.url = textInputs[0];
        break;
      default:
        payload.pluginTitle = textInput.value;
        payload.pluginName = textInput.value;
    }
    this.store.dispatch({
      type: ADD_PLUGIN,
      payload: payload
    });
    textInput.value = '';
    dropdown.value = '';
  }

  ngOnInit() {
  }

}
