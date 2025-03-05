import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOurServicesComponent } from './all-our-services.component';

describe('AllOurServicesComponent', () => {
  let component: AllOurServicesComponent;
  let fixture: ComponentFixture<AllOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOurServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
