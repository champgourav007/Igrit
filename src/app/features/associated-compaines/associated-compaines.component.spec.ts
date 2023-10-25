import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedCompainesComponent } from './associated-compaines.component';

describe('AssociatedCompainesComponent', () => {
  let component: AssociatedCompainesComponent;
  let fixture: ComponentFixture<AssociatedCompainesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociatedCompainesComponent]
    });
    fixture = TestBed.createComponent(AssociatedCompainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
