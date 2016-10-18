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

  // plugins: any;
  // isOpen: any;
  constructor(public store: Store<any>) {
    // this.plugins = store.select('plugins');
    // this.isOpen = this.plugins.subscribe(plugins => plugins[0].isBoxVisible);
  }

  toggleFooterSize() {
    this.store.dispatch({ type: TOGGLE_FOOTER_SIZE });
  }

  // TODO: get rid of this so it only exists in one place: plugins.ts
  clickInFooterMain(event) {
    const lowercaseName = event.target.id.replace(/-btn/, '');
    const title = lowercaseName[0].toUpperCase() + lowercaseName.slice(1);
    this.store.dispatch({
      type: TOGGLE_PLUGIN,
      payload: {
        pluginTitle: title,
        pluginComponentName: lowercaseName,
        config: {
          'col': 1,
          'row': 1,
          'sizex': 3,
          'sizey': 2
        }
      }
    });
  }

  ngOnInit() {
  }

}
