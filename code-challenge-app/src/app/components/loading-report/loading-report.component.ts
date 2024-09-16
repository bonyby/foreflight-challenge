import { Component } from '@angular/core';
import { WeatherReportViewModel } from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';

@Component({
  selector: 'app-loading-report',
  templateUrl: './loading-report.component.html',
  styleUrls: ['./loading-report.component.scss'],
})
export class LoadingReportComponent {
  icao: string = '';
  isLoading: boolean = true;

  constructor(weatherReportService: WeatherReportService) {
    weatherReportService.fetchingReport.subscribe((icao) =>
      this.OnFetchingNewReport(icao)
    );
    weatherReportService.newReport.subscribe((report) =>
      this.OnNewReportFetched(report)
    );
  }

  private OnFetchingNewReport(icao: string) {
    this.icao = icao;
    this.isLoading = true;
  }

  private OnNewReportFetched(report: WeatherReportViewModel) {
    this.isLoading = false;
  }
}
