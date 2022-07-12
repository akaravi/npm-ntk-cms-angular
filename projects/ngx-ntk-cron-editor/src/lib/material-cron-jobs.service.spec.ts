import { TestBed } from '@angular/core/testing';

import { MaterialCronJobsService } from './material-cron-jobs.service';

describe('MaterialCronJobsService', () => {
  let service: MaterialCronJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialCronJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
