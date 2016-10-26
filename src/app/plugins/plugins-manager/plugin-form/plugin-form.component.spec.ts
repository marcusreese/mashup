/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PluginFormComponent } from './plugin-form.component';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../../shared/reducers/footer';
import { pluginsReducer } from '../../../shared/reducers/plugins';

describe('Component: PluginForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PluginFormComponent
      ],
      imports: [
        FormsModule,
        StoreModule.provideStore({
          footerExpanded: footerReducer,
          plugins: pluginsReducer
        })
      ],
    });
  });
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(PluginFormComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});


// describe('Component: PluginForm', () => {
//   it('should create an instance', () => {
//     let component = new PluginFormComponent();
//     expect(component).toBeTruthy();
//   });
// });
