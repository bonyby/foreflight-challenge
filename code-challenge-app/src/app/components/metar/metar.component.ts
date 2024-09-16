import { Component } from '@angular/core';
import TemperatureHelper from 'src/app/shared/helpers/temperature-helper';
import { WeatherReportViewModel } from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';
import { ConditionsComponent } from '../conditions/conditions.component';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss'],
})
export class MetarComponent extends ConditionsComponent {
  constructor(weatherReportService: WeatherReportService) {
    super(weatherReportService);
  }

  override Render(report: WeatherReportViewModel) {
    let conditions = report.conditions;

    if (conditions == null) return;

    this.RenderBaseConditions(conditions);

    this.CreateNamedInfoBlock('ICAO', conditions.ident.toUpperCase());

    this.CreateNamedInfoBlock(
      'Density Altitude',
      `${conditions.densityAltitudeFt}'`
    );

    this.CreateNamedInfoBlock('Altimeter', `${conditions.pressureHg} in Hg`);

    let dewPointC = conditions.dewpointC;
    let dewPointF = TemperatureHelper.ToFahrenheit(dewPointC);
    this.CreateNamedInfoBlock('Dewpoint', `${dewPointC}°C (${dewPointF}°F)`);

    let tempC = conditions.tempC;
    let tempF = TemperatureHelper.ToFahrenheit(tempC);
    this.CreateNamedInfoBlock('Temperature', `${tempC}°C (${tempF}°F)`);
  }
}
