import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingMiamiDadeComponent } from './serving-miami-dade.component';

describe('ServingMiamiDadeComponent', () => {
  let component: ServingMiamiDadeComponent;
  let fixture: ComponentFixture<ServingMiamiDadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServingMiamiDadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServingMiamiDadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
