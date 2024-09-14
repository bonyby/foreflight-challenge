import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as moment from 'moment-timezone';
import TemperatureHelper from 'src/app/shared/helpers/temperature-helper';
import { WeatherReportViewModel } from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';
import { BasicInfoBlockComponent } from '../basic-info-block/basic-info-block.component';
import { NamedInfoBlockComponent } from '../named-info-block/named-info-block.component';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss'],
})
export class MetarComponent implements OnInit {
  @ViewChild('metarContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  hasReport: boolean = false;

  constructor(private weatherReportService: WeatherReportService) {}

  // temp for testing
  ngOnInit(): void {
    this.Render('EKOD');
  }

  Render(icao: string) {
    if (!this.weatherReportService.IsValidIcao(icao)) {
      alert(`${icao} is an invalid ICAO`);
      return;
    }

    this.weatherReportService.GetReport(icao).subscribe({
      next: (report) => this.RenderInternal(report),
    });
  }

  private RenderInternal(report: WeatherReportViewModel) {
    let metar = report.report.conditions;

    this.ClearContainer();

    this.CreateBasicInfoBlock(metar.text);

    this.CreateNamedInfoBlock('ICAO', metar.ident.toUpperCase());

    let time = moment(metar.dateIssued).format('hh:mm A [CEST]');
    this.CreateNamedInfoBlock('Time', time);

    let wind = `${metar.wind.direction}° at ${metar.wind.speedKts} kts`;
    this.CreateNamedInfoBlock('Wind', wind);

    this.CreateNamedInfoBlock(
      'Visibility',
      `${metar.visibility.distanceSm} sm`
    );

    let tempC = metar.tempC;
    let tempF = TemperatureHelper.ToFahrenheit(tempC);
    this.CreateNamedInfoBlock('Temperature', `${tempC}°C (${tempF}°F)`);

    let dewPointC = metar.dewpointC;
    let dewPointF = TemperatureHelper.ToFahrenheit(dewPointC);
    this.CreateNamedInfoBlock('Dewpoint', `${dewPointC}°C (${dewPointF}°F)`);

    this.CreateNamedInfoBlock('Altimeter', `${metar.pressureHg} in Hg`);

    this.CreateNamedInfoBlock('Humidity', `${metar.relativeHumidity}%`);

    this.CreateNamedInfoBlock(
      'Density Altitude',
      `${metar.densityAltitudeFt}'`
    );
  }

  private ClearContainer() {
    this.container.clear();
  }

  private CreateBasicInfoBlock(info: string) {
    var component = this.container.createComponent(BasicInfoBlockComponent);
    component.instance.info = info;
  }

  private CreateNamedInfoBlock(name: string, info: string) {
    var component = this.container.createComponent(NamedInfoBlockComponent);
    component.instance.name = name;
    component.instance.info = info;
  }
}
