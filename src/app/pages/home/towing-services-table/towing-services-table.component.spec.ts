import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowingServicesTableComponent } from './towing-services-table.component';

describe('TowingServicesTableComponent', () => {
  let component: TowingServicesTableComponent;
  let fixture: ComponentFixture<TowingServicesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowingServicesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowingServicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
