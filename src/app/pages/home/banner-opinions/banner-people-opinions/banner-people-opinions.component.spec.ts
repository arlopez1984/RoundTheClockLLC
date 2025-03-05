import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPeopleOpinionsComponent } from './banner-people-opinions.component';

describe('BannerPeopleOpinionsComponent', () => {
  let component: BannerPeopleOpinionsComponent;
  let fixture: ComponentFixture<BannerPeopleOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPeopleOpinionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPeopleOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
