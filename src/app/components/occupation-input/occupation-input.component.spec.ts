import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationInputComponent } from './occupation-input.component';

describe('OccupationInputComponent', () => {
  let component: OccupationInputComponent;
  let fixture: ComponentFixture<OccupationInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OccupationInputComponent]
    });
    fixture = TestBed.createComponent(OccupationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
