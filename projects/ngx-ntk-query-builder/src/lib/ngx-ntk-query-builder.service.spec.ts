import { TestBed } from '@angular/core/testing';

import { NgxNtkQueryBuilderService } from './ngx-ntk-query-builder.service';

describe('NgxNtkQueryBuilderService', () => {
  let service: NgxNtkQueryBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNtkQueryBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
