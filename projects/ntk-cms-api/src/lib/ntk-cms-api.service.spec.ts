import { TestBed } from '@angular/core/testing';

import { NtkCmsApiService } from './ntk-cms-api.service';

describe('NtkCmsApiService', () => {
  let service: NtkCmsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtkCmsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
