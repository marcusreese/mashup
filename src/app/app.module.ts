import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Store, StoreModule } from '@ngrx/store';
import { NgGridModule } from 'angular2-grid';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { footerReducer } from './shared/reducers/footer';
import { pluginsReducer } from './shared/reducers/plugins';
import { PluginsManagerComponent } from './plugins/plugins-manager/plugins-manager.component';
import { MapComponent } from './plugins/map/map.component';
import { HlrComponent } from './plugins/hlr/hlr.component';
import { PluginFormComponent } from './plugins/plugins-manager/plugin-form/plugin-form.component';
import { FrameComponent } from './plugins/frame/frame.component';
import { ComboAComponent } from './plugins/combo-a/combo-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    PluginsManagerComponent,
    MapComponent,
    HlrComponent,
    PluginFormComponent,
    FrameComponent,
    ComboAComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgGridModule,
    StoreModule.provideStore({
      footerExpanded: footerReducer,
      plugins: pluginsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
