import { Component } from '@angular/core';
import { WeatherReportViewModel } from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';

@Component({
  selector: 'app-report-lookup-history',
  templateUrl: './report-lookup-history.component.html',
  styleUrls: ['./report-lookup-history.component.scss'],
})
export class ReportLookupHistoryComponent {
  lookupHistory: Array<string> = new Array();
  private lookupCount: number = 5;

  constructor(private weatherReportService: WeatherReportService) {
    this.weatherReportService.newReport.subscribe((report) =>
      this.NewReportFetched(report)
    );
  }

  private NewReportFetched(report: WeatherReportViewModel) {
    if (report == null) return;

    let icao = report.conditions.ident.toUpperCase();

    var existingEntryIndex = this.lookupHistory.indexOf(icao);
    if (existingEntryIndex != -1) {
      this.lookupHistory.splice(existingEntryIndex, 1);
    }

    this.lookupHistory.unshift(icao);

    if (this.lookupHistory.length > this.lookupCount) {
      this.lookupHistory.pop();
    }
  }

  IcaoClicked(icao: string) {
    this.weatherReportService.GetNewReport(icao);
  }
}
