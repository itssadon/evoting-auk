import { TestBed, inject } from '@angular/core/testing';

import { AccreditationService } from './accreditation.service';

describe('AccreditationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccreditationService]
    });
  });

  it('should ...', inject([AccreditationService], (service: AccreditationService) => {
    expect(service).toBeTruthy();
  }));
});
