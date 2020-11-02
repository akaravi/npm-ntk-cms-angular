import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtkCmsApiComponent } from './ntk-cms-api.component';

describe('NtkCmsApiComponent', () => {
  let component: NtkCmsApiComponent;
  let fixture: ComponentFixture<NtkCmsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtkCmsApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtkCmsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
