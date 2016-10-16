import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TOGGLE_FOOTER_SIZE } from './footer.reducer';

interface AppState {
  footerExpanded: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public store: Store<AppState>) {
  }

  toggleFooterSize() {
    this.store.dispatch({ type: TOGGLE_FOOTER_SIZE });
  }

  ngOnInit() {
  }

}
