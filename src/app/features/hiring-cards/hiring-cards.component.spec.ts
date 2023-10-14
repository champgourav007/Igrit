import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringCardsComponent } from './hiring-cards.component';

describe('HiringCardsComponent', () => {
  let component: HiringCardsComponent;
  let fixture: ComponentFixture<HiringCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringCardsComponent]
    });
    fixture = TestBed.createComponent(HiringCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
