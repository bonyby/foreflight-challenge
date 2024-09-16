import { Component } from '@angular/core';
import TimeHelper from 'src/app/shared/helpers/time-helper';
import {
  ForecastConditionViewModel,
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
  constructor(weatherReportService: WeatherReportService) {
    super(weatherReportService);
  }

  override Render(report: WeatherReportViewModel): void {
    let conditions = report.forecast?.conditions;

    if (conditions == undefined || conditions.length == 0) return;

    if (report.nearbyReportStatus?.isFromNearbyAirport === true) {
      var nearbyReportNotice = `NOTE: No report found for ${report.nearbyReportStatus.originalIcao.toUpperCase()}. Showing report for nearby ${report.forecast.ident.toUpperCase()} instead.`;
      this.CreateBasicInfoBlock(nearbyReportNotice);
    }

    conditions.forEach((condition) => {
      this.RenderForecastBlock(condition);
    });
  }

  private RenderForecastBlock(condition: ForecastConditionViewModel) {
    this.RenderBaseConditions(condition);

    let fromTime = TimeHelper.FormatTime(condition.period.dateStart);
    this.CreateNamedInfoBlock('Valid From', fromTime);

    let expireTime = TimeHelper.FormatTime(condition.period.dateEnd);
    this.CreateNamedInfoBlock('Expires At', expireTime);
  }
}
