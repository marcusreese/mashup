import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TOGGLE_FOOTER_SIZE } from '../../shared/reducers/footer';
import { TOGGLE_PLUGIN } from '../../shared/reducers/plugins';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // TODO: Buttons should say "Show Plugins", "Hide Map" etc.
  plugins: any;
  constructor(public store: Store<any>) {
    this.plugins = store.select('plugins');
  }

  toggleFooterSize() {
    this.store.dispatch({ type: TOGGLE_FOOTER_SIZE });
  }

  clickInFooterMain(event) {
    const lowercaseName = event.target.id.replace(/-btn/, '');
    this.store.dispatch({
      type: TOGGLE_PLUGIN,
      payload: {
        pluginName: lowercaseName,
        toToggle: 'isBoxVisible'
      }
    });
  }

  ngOnInit() {
  }

}
