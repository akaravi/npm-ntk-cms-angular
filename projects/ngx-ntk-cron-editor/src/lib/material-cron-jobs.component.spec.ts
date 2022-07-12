import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCronJobsComponent } from './material-cron-jobs.component';

describe('MaterialCronJobsComponent', () => {
  let component: MaterialCronJobsComponent;
  let fixture: ComponentFixture<MaterialCronJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCronJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCronJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
