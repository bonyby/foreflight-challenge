import { Component, OnInit } from '@angular/core';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';

@Component({
  selector: 'app-icao-input',
  templateUrl: './icao-input.component.html',
  styleUrls: ['./icao-input.component.scss'],
})
export class IcaoInputComponent implements OnInit {
  constructor(private weatherReportService: WeatherReportService) {}

  ngOnInit(): void {
    this.Search('EKOD');
  }

  Search(icao: string) {
    this.weatherReportService.GetNewReport(icao);
  }
}
