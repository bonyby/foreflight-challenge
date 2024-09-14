import { Component } from '@angular/core';
import TimeHelper from 'src/app/shared/helpers/time-helper';
import {
  ForecastCondition,
  WeatherReportViewModel,
} from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';
import { ConditionsComponent } from '../conditions/conditions.component';

@Component({
  selector: 'app-taf',
  templateUrl: './taf.component.html',
  styleUrls: ['./taf.component.scss'],
})
export class TafComponent extends ConditionsComponent {
  icao: string = '';

  constructor(weatherReportService: WeatherReportService) {
    super(weatherReportService);
  }

  override Render(report: WeatherReportViewModel): void {
    let conditions = report.report.forecast?.conditions;

    if (conditions == undefined || conditions.length == 0) return;

    this.icao = report.report.conditions?.ident.toUpperCase() ?? '';

    this.ClearContainer();

    conditions.forEach((condition) => {
      this.RenderForecastBlock(condition);
    });
  }

  private RenderForecastBlock(condition: ForecastCondition) {
    this.RenderBaseConditions(condition);

    let fromTime = TimeHelper.FormatTime(condition.period.dateStart);
    this.CreateNamedInfoBlock('Valid From', fromTime);

    let expireTime = TimeHelper.FormatTime(condition.period.dateEnd);
    this.CreateNamedInfoBlock('Expires At', expireTime);
  }
}
