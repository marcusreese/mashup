/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MainContentComponent } from './main-content.component';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../shared/reducers/footer';
import { pluginsReducer } from '../../shared/reducers/plugins';
import { NgGridModule } from 'angular2-grid';


describe('Component: MainContent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent
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
  // new FooterComponent now needs a state argument.
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(MainContentComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
