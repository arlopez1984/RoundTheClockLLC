import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWhyChosseMeComponent } from './banner-why-chosse-me.component';

describe('BannerWhyChosseMeComponent', () => {
  let component: BannerWhyChosseMeComponent;
  let fixture: ComponentFixture<BannerWhyChosseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerWhyChosseMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerWhyChosseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
