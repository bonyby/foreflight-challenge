import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingReportComponent } from './loading-report.component';

describe('LoadingReportComponent', () => {
  let component: LoadingReportComponent;
  let fixture: ComponentFixture<LoadingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
