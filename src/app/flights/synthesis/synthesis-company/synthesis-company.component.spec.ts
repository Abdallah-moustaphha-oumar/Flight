import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesisCompanyComponent } from './synthesis-company.component';

describe('SynthesisCompanyComponent', () => {
  let component: SynthesisCompanyComponent;
  let fixture: ComponentFixture<SynthesisCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthesisCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthesisCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
