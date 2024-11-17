import { TestBed } from '@angular/core/testing';

import { PetservicesService } from './petservices.service';

describe('PetservicesService', () => {
  let service: PetservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
