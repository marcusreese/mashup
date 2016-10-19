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
import { DataTableModule, SharedModule } from 'primeng/primeng';

describe('Component: MainContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent,
        PluginsManagerComponent,
        MapComponent,
        HlrComponent
      ],
      imports: [
        NgGridModule,
        DataTableModule,
        SharedModule,
        StoreModule.provideStore({
          footerExpanded: footerReducer,
          plugins: pluginsReducer
        })
      ],
    });
  });
  // new FooterComponent now needs a state argument.
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(MainContentComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
