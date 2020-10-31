import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FractalExamplesComponent } from './fractal-examples.component';

describe('FractalExamplesComponent', () => {
  let component: FractalExamplesComponent;
  let fixture: ComponentFixture<FractalExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FractalExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FractalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
