import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFlipComponent } from './input-flip.component';

describe('InputFlipComponent', () => {
  let component: InputFlipComponent;
  let fixture: ComponentFixture<InputFlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
