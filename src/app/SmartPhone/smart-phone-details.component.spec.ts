import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhoneDetailsComponent } from './smart-phone-details.component';

describe('SmartPhoneDetailsComponent', () => {
  let component: SmartPhoneDetailsComponent;
  let fixture: ComponentFixture<SmartPhoneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartPhoneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
