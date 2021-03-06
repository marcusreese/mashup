import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  footerExpanded: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mission UI';
  footerExpanded: any; // RxJs:Observable<boolean>

  constructor(public store: Store<AppState>) {
    this.footerExpanded = store.select('footerExpanded');
  }
}
