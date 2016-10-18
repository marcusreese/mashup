/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { Store, StoreModule } from '@ngrx/store';
import { footerReducer } from '../../shared/reducers/footer';

describe('Component: Footer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      imports: [
        StoreModule.provideStore({ footerExpanded: footerReducer })
      ],
    });
  });
  // new FooterComponent now needs a state argument.
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(FooterComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
