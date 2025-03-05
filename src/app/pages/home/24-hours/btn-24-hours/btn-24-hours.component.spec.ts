import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn24HoursComponent } from './btn-24-hours.component';

describe('Btn24HoursComponent', () => {
  let component: Btn24HoursComponent;
  let fixture: ComponentFixture<Btn24HoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn24HoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btn24HoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
