import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondReviewComponent } from './second-review.component';

describe('SecondReviewComponent', () => {
  let component: SecondReviewComponent;
  let fixture: ComponentFixture<SecondReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
