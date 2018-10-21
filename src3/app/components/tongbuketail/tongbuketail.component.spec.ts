import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuketailComponent } from './tongbuketail.component';

describe('TongbuketailComponent', () => {
  let component: TongbuketailComponent;
  let fixture: ComponentFixture<TongbuketailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuketailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuketailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
