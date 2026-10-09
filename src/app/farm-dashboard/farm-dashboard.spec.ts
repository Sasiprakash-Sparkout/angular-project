import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmDashboard } from './farm-dashboard';

describe('FarmDashboard', () => {
  let component: FarmDashboard;
  let fixture: ComponentFixture<FarmDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(FarmDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
