import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilderrahmenComponent } from './bilderrahmen.component';

describe('BilderrahmenComponent', () => {
  let component: BilderrahmenComponent;
  let fixture: ComponentFixture<BilderrahmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilderrahmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilderrahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
