import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAddComponent } from './staff-add.component';

describe('StaffAddComponent', () => {
  let component: StaffAddComponent;
  let fixture: ComponentFixture<StaffAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffAddComponent]
    });
    fixture = TestBed.createComponent(StaffAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
