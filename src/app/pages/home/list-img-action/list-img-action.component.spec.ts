import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImgActionComponent } from './list-img-action.component';

describe('ListImgActionComponent', () => {
  let component: ListImgActionComponent;
  let fixture: ComponentFixture<ListImgActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListImgActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListImgActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
