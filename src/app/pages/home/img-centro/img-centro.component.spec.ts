import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCentroComponent } from './img-centro.component';

describe('ImgCentroComponent', () => {
  let component: ImgCentroComponent;
  let fixture: ComponentFixture<ImgCentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgCentroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
