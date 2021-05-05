import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNtkQueryBuilderComponent } from './ngx-ntk-query-builder.component';

describe('NgxNtkQueryBuilderComponent', () => {
  let component: NgxNtkQueryBuilderComponent;
  let fixture: ComponentFixture<NgxNtkQueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNtkQueryBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNtkQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
