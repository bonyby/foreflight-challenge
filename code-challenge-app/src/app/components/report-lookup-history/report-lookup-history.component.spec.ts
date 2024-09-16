import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLookupHistoryComponent } from './report-lookup-history.component';

describe('ReportLookupHistoryComponent', () => {
  let component: ReportLookupHistoryComponent;
  let fixture: ComponentFixture<ReportLookupHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLookupHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLookupHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
