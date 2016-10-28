/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../shared/reducers/footer';
import { pluginsReducer } from '../../shared/reducers/plugins';

describe('Component: Frame', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FrameComponent
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
    let fixture = TestBed.createComponent(FrameComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});


// describe('Component: Frame', () => {
//   it('should create an instance', () => {
//     let component = new FrameComponent();
//     expect(component).toBeTruthy();
//   });
// });
