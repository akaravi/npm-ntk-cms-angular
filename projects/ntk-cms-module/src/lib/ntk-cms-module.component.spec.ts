import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtkCmsModuleComponent } from './ntk-cms-module.component';

describe('NtkCmsModuleComponent', () => {
  let component: NtkCmsModuleComponent;
  let fixture: ComponentFixture<NtkCmsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtkCmsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtkCmsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
