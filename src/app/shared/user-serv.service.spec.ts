import { TestBed, inject } from '@angular/core/testing';

import { UserServService } from './user-serv.service';

describe('UserServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServService]
    });
  });

  it('should be created', inject([UserServService], (service: UserServService) => {
    expect(service).toBeTruthy();
  }));
});
