import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersCardComponent } from './employers-card.component';

describe('EmployersCardComponent', () => {
  let component: EmployersCardComponent;
  let fixture: ComponentFixture<EmployersCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployersCardComponent]
    });
    fixture = TestBed.createComponent(EmployersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
