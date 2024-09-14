export interface WeatherReportViewModel {
  report: Report;
}

export interface Report {
  conditions: Conditions;
}

export interface Conditions {
  text: string;
  ident: string;
  dateIssued: string; // This could be a Date object if needed, but it's in ISO format.
  lat: number;
  lon: number;
  elevationFt: number;
  tempC: number;
  dewpointC: number;
  pressureHg: number;
  pressureHpa: number;
  reportedAsHpa: boolean;
  densityAltitudeFt: number;
  relativeHumidity: number;
  flightRules: string;
  cloudLayers: CloudLayer[];
  cloudLayersV2: CloudLayer[];
  weather: any[]; // Assuming it's an array, if there are further details, modify this type.
  visibility: Visibility;
  wind: Wind;
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
