import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { WeatherReportViewModel } from '../models/weather-report-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherReportService {
  @Output() newReport = new EventEmitter<WeatherReportViewModel>();

  private baseAddress: string = '/api/report/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('x-foreflight-odense', 'true');
  }

  GetNewReport(icao: string) {
    this.http
      .get<WeatherReportViewModel>(this.baseAddress + icao, {
        headers: this.headers,
      })
      .subscribe({
        next: (report) => this.newReport.emit(report),
      });
  }
}
