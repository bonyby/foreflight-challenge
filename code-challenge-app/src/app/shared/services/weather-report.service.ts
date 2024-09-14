import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { WeatherReportViewModel } from '../models/weather-report-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherReportService {
  private baseAddress: string = '/weather/report/';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('x-foreflight-odense', 'true');
  }

  GetReport(icao: string): Observable<WeatherReportViewModel> {
    if (!this.IsValidIcao(icao)) {
      alert(`${icao} is an invalid ICAO`);
      return EMPTY;
    }

    return this.http.get<WeatherReportViewModel>(this.baseAddress + icao, {
      headers: this.headers,
    });
  }

  // *Insert more validation that I know nothing about*
  private IsValidIcao(icao: string): boolean {
    return icao.length === 4;
  }
}
