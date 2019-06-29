import { TestBed, inject } from '@angular/core/testing';

import { CustSrvService } from './cust-srv.service';

describe('CustSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustSrvService]
    });
  });

  it('should be created', inject([CustSrvService], (service: CustSrvService) => {
    expect(service).toBeTruthy();
  }));
});
