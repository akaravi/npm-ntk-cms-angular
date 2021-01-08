import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtkCmsFileuploaderComponent } from './ntk-cms-fileuploader.component';

describe('NtkCmsFileuploaderComponent', () => {
  let component: NtkCmsFileuploaderComponent;
  let fixture: ComponentFixture<NtkCmsFileuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtkCmsFileuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtkCmsFileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
