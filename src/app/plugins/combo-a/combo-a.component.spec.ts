/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ComboAComponent } from './combo-a.component';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../shared/reducers/footer';
import { pluginsReducer } from '../../shared/reducers/plugins';

describe('Component: ComboA', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComboAComponent
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
    let fixture = TestBed.createComponent(ComboAComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});

// describe('Component: ComboA', () => {
//   it('should create an instance', () => {
//     let component = new ComboAComponent();
//     expect(component).toBeTruthy();
//   });
// });
