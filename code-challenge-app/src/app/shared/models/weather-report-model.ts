export interface WeatherReportViewModel {
  conditions: WeatherConditionsViewModel;
  forecast: WeatherForecastViewModel;
}

export interface BaseConditionsViewModel {
  dateIssued: string;
  text: string;
  elevationFt: number;
  relativeHumidity: number;
  visibility: VisibilityViewModel;
  wind: WindViewModel;
}

export interface WeatherConditionsViewModel extends BaseConditionsViewModel {
  ident: string;
  tempC: number;
  pressureHg: number;
  densityAltitudeFt: number;
  dewpointC: number;
}

export interface VisibilityViewModel {
  distanceSm: number;
}

export interface WindViewModel {
  speedKts: number;
  direction: number;
}

export interface WeatherForecastViewModel {
  text: string;
  ident: string;
  dateIssued: string;
  period: ForecastPeriodViewModel;
  elevationFt: number;
  conditions: ForecastConditionViewModel[];
}

export interface ForecastPeriodViewModel {
  dateStart: string;
  dateEnd: string;
}

export interface ForecastConditionViewModel extends BaseConditionsViewModel {
  change: string;
  period: ForecastPeriodViewModel;
}
