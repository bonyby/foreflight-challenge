export interface WeatherReportViewModel {
  report: Report;
}

export interface Report {
  conditions?: WeatherConditions;
  forecast?: WeatherForecast;
  windsAloft?: WindsAloft;
}

export interface BaseConditions {
  dateIssued: string;
  text: string;
  lat: number;
  lon: number;
  elevationFt: number;
  relativeHumidity: number;
  flightRules: string;
  cloudLayers: CloudLayer[];
  cloudLayersV2: CloudLayer[];
  weather: string[];
  visibility: Visibility;
  wind: Wind;
}

export interface WeatherConditions extends BaseConditions {
  ident: string;
  tempC: number;
  pressureHg: number;
  pressureHpa: number;
  reportedAsHpa: boolean;
  densityAltitudeFt: number;
  dewpointC: number;
}

export interface CloudLayer {
  coverage: string;
  altitudeFt: number;
  ceiling: boolean;
}

export interface Visibility {
  distanceSm: number;
  distanceQualifier: number;
  prevailingVisSm: number;
  prevailingVisDistanceQualifier: number;
}

export interface Wind {
  speedKts: number;
  direction: number;
  variableFrom: number;
  variableTo: number;
  from: number;
  to: number;
  variable: boolean;
}

export interface WeatherForecast {
  text: string;
  ident: string;
  dateIssued: string;
  period: ForecastPeriod;
  lat: number;
  lon: number;
  elevationFt: number;
  conditions: ForecastCondition[];
}

export interface ForecastPeriod {
  dateStart: string;
  dateEnd: string;
}

export interface ForecastCondition extends BaseConditions {
  change: string;
  period: ForecastPeriod;
}

export interface WindsAloft {
  lat: number;
  lon: number;
  dateIssued: string;
  windsAloft: WindAloftCondition[];
}

export interface WindAloftCondition {
  validTime: string;
  period: ForecastPeriod;
  windTemps: Record<string, WindTemp>;
}

export interface WindTemp {
  directionFromTrue: number;
  knots: number;
  celsius: number;
  altitude: number;
  isLightAndVariable: boolean;
  isGreaterThan199Knots: boolean;
  turbulence: boolean;
  icing: boolean;
}
