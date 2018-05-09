import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoontodayComponent } from './cartoontoday.component';

describe('CartoontodayComponent', () => {
  let component: CartoontodayComponent;
  let fixture: ComponentFixture<CartoontodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoontodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoontodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
