import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtkCmsFilemangerComponent } from './ntk-cms-filemanger.component';

describe('NtkCmsFilemangerComponent', () => {
  let component: NtkCmsFilemangerComponent;
  let fixture: ComponentFixture<NtkCmsFilemangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtkCmsFilemangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtkCmsFilemangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
