import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCalcutaterComponent } from './cart-calcutater.component';

describe('CartCalcutaterComponent', () => {
  let component: CartCalcutaterComponent;
  let fixture: ComponentFixture<CartCalcutaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCalcutaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCalcutaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
