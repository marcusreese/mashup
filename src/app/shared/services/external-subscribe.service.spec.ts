/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExternalSubscribeService } from './external-subscribe.service';

describe('Service: ExternalSubscribe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalSubscribeService]
    });
  });

  it('should ...', inject([ExternalSubscribeService], (service: ExternalSubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
