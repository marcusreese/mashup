/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { PluginsManagerComponent } from './plugins-manager.component';
import { PluginFormComponent } from './plugin-form/plugin-form.component';
import { footerReducer } from '../../shared/reducers/footer';
import { pluginsReducer } from '../../shared/reducers/plugins';

describe('Component: MainContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PluginsManagerComponent,
        PluginFormComponent,
      ],
      imports: [
        StoreModule.provideStore({
          footerExpanded: footerReducer,
          plugins: pluginsReducer
        })
      ],
    });
  });
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(PluginsManagerComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});

// describe('Component: PluginsManager', () => {
//   it('should create an instance', () => {
//     let component = new PluginsManagerComponent();
//     expect(component).toBeTruthy();
//   });
// });
