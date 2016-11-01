/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExternalPropertiesService } from './external-properties.service';

describe('Service: ExternalProperties', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalPropertiesService]
    });
  });

  it('should ...', inject([ExternalPropertiesService], (service: ExternalPropertiesService) => {
    expect(service).toBeTruthy();
  }));
});
