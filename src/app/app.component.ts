import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
