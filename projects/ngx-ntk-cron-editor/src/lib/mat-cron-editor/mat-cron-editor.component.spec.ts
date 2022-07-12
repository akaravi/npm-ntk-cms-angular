import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCronEditorComponent } from './mat-cron-editor.component';

describe('MatMinuteCronComponent', () => {
  let component: MatCronEditorComponent;
  let fixture: ComponentFixture<MatCronEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCronEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCronEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
