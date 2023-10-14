import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalCardsComponent } from './testimonal-cards.component';

describe('TestimonalCardsComponent', () => {
  let component: TestimonalCardsComponent;
  let fixture: ComponentFixture<TestimonalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonalCardsComponent]
    });
    fixture = TestBed.createComponent(TestimonalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
