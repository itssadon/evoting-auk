import { TestBed, inject } from '@angular/core/testing';

import { AspirantService } from './aspirant.service';

describe('AspirantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AspirantService]
    });
  });

  it('should ...', inject([AspirantService], (service: AspirantService) => {
    expect(service).toBeTruthy();
  }));
});
