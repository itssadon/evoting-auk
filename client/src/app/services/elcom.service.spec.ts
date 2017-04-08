import { TestBed, inject } from '@angular/core/testing';

import { ElcomService } from './elcom.service';

describe('ElcomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElcomService]
    });
  });

  it('should ...', inject([ElcomService], (service: ElcomService) => {
    expect(service).toBeTruthy();
  }));
});
