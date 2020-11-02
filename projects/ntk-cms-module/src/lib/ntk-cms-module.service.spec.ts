import { TestBed } from '@angular/core/testing';

import { NtkCmsModuleService } from './ntk-cms-module.service';

describe('NtkCmsModuleService', () => {
  let service: NtkCmsModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtkCmsModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
