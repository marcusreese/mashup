import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { footerReducer } from './layout/footer/footer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ footerToggle: footerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
