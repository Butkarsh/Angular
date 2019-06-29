import { TestBed, inject } from '@angular/core/testing';

import { ImgsrvService } from './imgsrv.service';

describe('ImgsrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgsrvService]
    });
  });

  it('should be created', inject([ImgsrvService], (service: ImgsrvService) => {
    expect(service).toBeTruthy();
  }));
});
