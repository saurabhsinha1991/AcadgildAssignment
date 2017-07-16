import { TestBed, inject } from '@angular/core/testing';

import { CaDeactivateGuardService } from './ca-deactivate-guard.service';

describe('CaDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaDeactivateGuardService]
    });
  });

  it('should be created', inject([CaDeactivateGuardService], (service: CaDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
