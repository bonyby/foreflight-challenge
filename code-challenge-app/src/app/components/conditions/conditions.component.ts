import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import TimeHelper from 'src/app/shared/helpers/time-helper';
import {
  BaseConditions,
  WeatherReportViewModel,
} from 'src/app/shared/models/weather-report-model';
import { WeatherReportService } from 'src/app/shared/services/weather-report.service';
import { BasicInfoBlockComponent } from '../basic-info-block/basic-info-block.component';
import { NamedInfoBlockComponent } from '../named-info-block/named-info-block.component';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export abstract class ConditionsComponent {
  @ViewChild('conditionsContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(private weatherReportService: WeatherReportService) {}

  Render(icao: string) {
    this.weatherReportService.GetReport(icao).subscribe({
      next: (report) => {
        this.ClearContainer();
        this.RenderInternal(report);
      },
    });
  }

  abstract RenderInternal(report: WeatherReportViewModel): void;

  protected RenderBaseConditions(conditions: BaseConditions | undefined) {
    if (conditions == null) {
      this.CreateBasicInfoBlock(`No conditions found`);
      return;
    }

    this.CreateBasicInfoBlock(conditions.text);

    let time = TimeHelper.FormatTime(conditions.dateIssued);
    this.CreateNamedInfoBlock('Time', time);

    if (conditions.wind?.direction != undefined) {
      let wind = `${
        conditions.wind.direction
      }° at ${conditions.wind.speedKts.toPrecision(2)} kts`;
      this.CreateNamedInfoBlock('Wind', wind);
    }

    this.CreateNamedInfoBlock(
      'Visibility',
      `${conditions.visibility.distanceSm} sm`
    );

    this.CreateNamedInfoBlock('Humidity', `${conditions.relativeHumidity}%`);
  }

  protected ClearContainer() {
    this.container.clear();
  }

  protected CreateBasicInfoBlock(info: string) {
    var component = this.container.createComponent(BasicInfoBlockComponent);
    component.instance.info = info;
  }

  protected CreateNamedInfoBlock(name: string, info: string) {
    var component = this.container.createComponent(NamedInfoBlockComponent);
    component.instance.name = name;
    component.instance.info = info;
  }
}
