import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSellComponent } from './banner-sell.component';

describe('BannerSellComponent', () => {
  let component: BannerSellComponent;
  let fixture: ComponentFixture<BannerSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
