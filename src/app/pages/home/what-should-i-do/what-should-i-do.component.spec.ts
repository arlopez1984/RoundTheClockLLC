import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatShouldIDoComponent } from './what-should-i-do.component';

describe('WhatShouldIDoComponent', () => {
  let component: WhatShouldIDoComponent;
  let fixture: ComponentFixture<WhatShouldIDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatShouldIDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatShouldIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
