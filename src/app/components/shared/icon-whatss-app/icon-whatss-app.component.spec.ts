import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWhatssAppComponent } from './icon-whatss-app.component';

describe('IconWhatssAppComponent', () => {
  let component: IconWhatssAppComponent;
  let fixture: ComponentFixture<IconWhatssAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconWhatssAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconWhatssAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
