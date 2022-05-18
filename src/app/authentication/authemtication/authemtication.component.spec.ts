import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthemticationComponent } from './authemtication.component';

describe('AuthemticationComponent', () => {
  let component: AuthemticationComponent;
  let fixture: ComponentFixture<AuthemticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthemticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthemticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
