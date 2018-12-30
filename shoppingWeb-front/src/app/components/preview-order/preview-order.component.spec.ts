import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewOrderComponent } from './preview-order.component';

describe('PreviewOrderComponent', () => {
  let component: PreviewOrderComponent;
  let fixture: ComponentFixture<PreviewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
