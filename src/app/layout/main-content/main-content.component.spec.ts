/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MainContentComponent } from './main-content.component';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../shared/reducers/footer';
import { pluginsReducer } from '../../shared/reducers/plugins';
import { NgGridModule } from 'angular2-grid';
import { PluginsManagerComponent } from '../../plugins/plugins-manager/plugins-manager.component';
import { MapComponent } from '../../plugins/map/map.component';
import { HlrComponent } from '../../plugins/hlr/hlr.component';
import { PluginFormComponent } from '../../plugins/plugins-manager/plugin-form/plugin-form.component';
import { FrameComponent } from '../../plugins/frame/frame.component';
import { ComboAComponent } from '../../plugins/combo-a/combo-a.component';

describe('Component: MainContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent,
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
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(MainContentComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
