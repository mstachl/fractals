import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalControllerComponent } from './fractal-controller.component';

describe('FractalControllerComponent', () => {
  let component: FractalControllerComponent;
  let fixture: ComponentFixture<FractalControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractalControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractalControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
