import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LognInComponent } from './logn-in.component';

describe('LognInComponent', () => {
  let component: LognInComponent;
  let fixture: ComponentFixture<LognInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LognInComponent]
    });
    fixture = TestBed.createComponent(LognInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
