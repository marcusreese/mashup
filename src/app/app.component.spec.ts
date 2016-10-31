/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { footerReducer } from './shared/reducers/footer';
import { pluginsReducer } from './shared/reducers/plugins';
import { NgGridModule } from 'angular2-grid';
import { PluginsManagerComponent } from './plugins/plugins-manager/plugins-manager.component';
import { MapComponent } from './plugins/map/map.component';
import { HlrComponent } from './plugins/hlr/hlr.component';
import { PluginFormComponent } from './plugins/plugins-manager/plugin-form/plugin-form.component';
import { FrameComponent } from './plugins/frame/frame.component';
import { ComboAComponent } from './plugins/combo-a/combo-a.component';

describe('App: Mashup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
        NgGridModule,
        StoreModule.provideStore({
          footerExpanded: footerReducer,
          plugins: pluginsReducer
        })
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Mission UI');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Mission UI');
  }));
});
