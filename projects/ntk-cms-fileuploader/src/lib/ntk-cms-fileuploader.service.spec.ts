import { TestBed } from '@angular/core/testing';

import { NtkCmsFileuploaderService } from './ntk-cms-fileuploader.service';

describe('NtkCmsFileuploaderService', () => {
  let service: NtkCmsFileuploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NtkCmsFileuploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
