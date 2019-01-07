import { TestBed } from '@angular/core/testing';

import { AptService } from './apt.service';

describe('AptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AptService = TestBed.get(AptService);
    expect(service).toBeTruthy();
  });
});
