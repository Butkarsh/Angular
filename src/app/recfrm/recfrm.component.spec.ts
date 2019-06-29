import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecfrmComponent } from './recfrm.component';

describe('RecfrmComponent', () => {
  let component: RecfrmComponent;
  let fixture: ComponentFixture<RecfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
