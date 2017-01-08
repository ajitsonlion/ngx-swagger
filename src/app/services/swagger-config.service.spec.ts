/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {SwaggerConfigService} from './swagger-config.service';

describe('SwaggerConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwaggerConfigService]
    });
  });

  it('should ...', inject([SwaggerConfigService], (service: SwaggerConfigService) => {
    expect(service).toBeTruthy();
  }));
});
