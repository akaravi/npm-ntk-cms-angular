import { TestBed } from '@angular/core/testing';

import { NtkCmsFilemangerService } from './ntk-cms-filemanger.service';

describe('NtkCmsFilemangerService', () => {
  let service: NtkCmsFilemangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtkCmsFilemangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
