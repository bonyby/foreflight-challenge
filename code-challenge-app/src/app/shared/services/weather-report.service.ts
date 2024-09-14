import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { WeatherReportViewModel } from '../models/weather-report-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherReportService {
  @Output() newReport = new EventEmitter<WeatherReportViewModel>();

  private baseAddress: string = '/weather/report/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('x-foreflight-odense', 'true');
  }

  GetNewReport(icao: string) {
    if (!this.IsValidIcao(icao)) {
      alert(`${icao} is an invalid ICAO`);
    }

    this.http
      .get<WeatherReportViewModel>(this.baseAddress + icao, {
        headers: this.headers,
      })
      .subscribe({
        next: (report) => this.newReport.emit(report),
      });
  }

  // *Insert more validation that I know nothing about*
  private IsValidIcao(icao: string): boolean {
    return icao.length === 4;
  }
}
