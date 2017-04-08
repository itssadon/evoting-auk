import { TestBed, inject } from '@angular/core/testing';

import { PaystackService } from './paystack.service';

describe('PaystackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaystackService]
    });
  });

  it('should ...', inject([PaystackService], (service: PaystackService) => {
    expect(service).toBeTruthy();
  }));
});
