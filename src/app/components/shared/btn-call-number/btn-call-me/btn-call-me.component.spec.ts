import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCallMeComponent } from './btn-call-me.component';

describe('BtnCallMeComponent', () => {
  let component: BtnCallMeComponent;
  let fixture: ComponentFixture<BtnCallMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCallMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCallMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
