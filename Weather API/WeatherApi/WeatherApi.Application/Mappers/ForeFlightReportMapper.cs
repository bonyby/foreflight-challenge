using WeatherApi.Application.Models;
using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Mappers
{
    public class ForeFlightReportMapper : IForeFlightReportMapper
    {
        public ReportModel Map(ForeFlightReportModel report)
        {
            return new ReportModel
            {
                Conditions = MapToWeatherConditions(report.Report.Conditions),
                Forecast = MapToWeatherForecast(report.Report.Forecast),
            };
        }

        private WeatherConditions MapToWeatherConditions(ForeFlightWeatherConditions source)
        {
            if (source == null) return null;

            return new WeatherConditions
            {
                DateIssued = source.DateIssued,
                Text = source.Text,
                Lat = source.Lat,
                Lon = source.Lon,
                ElevationFt = source.ElevationFt,
                RelativeHumidity = source.RelativeHumidity,
                FlightRules = source.FlightRules,
                CloudLayers = source.CloudLayers?.Select(MapToCloudLayer).ToList(),
                CloudLayersV2 = source.CloudLayersV2?.Select(MapToCloudLayer).ToList(),
                Weather = source.Weather?.ToList(),
                Visibility = MapToVisibility(source.Visibility),
                Wind = MapToWind(source.Wind),
                Ident = source.Ident,
                TempC = source.TempC,
                PressureHg = source.PressureHg,
                PressureHpa = source.PressureHpa,
                ReportedAsHpa = source.ReportedAsHpa,
                DensityAltitudeFt = source.DensityAltitudeFt,
                DewpointC = source.DewpointC
            };
        }

        private WeatherForecast MapToWeatherForecast(ForeFlightWeatherForecast source)
        {
            if (source == null) return null;

            return new WeatherForecast
            {
                Text = source.Text,
                Ident = source.Ident,
                DateIssued = source.DateIssued,
                Period = MapToForecastPeriod(source.Period),
                Lat = source.Lat,
                Lon = source.Lon,
                ElevationFt = source.ElevationFt,
                Conditions = source.Conditions?.Select(MapToForecastCondition).ToList()
            };
        }

        private CloudLayer MapToCloudLayer(ForeFlightCloudLayer source)
        {
            if (source == null) return null;

            return new CloudLayer
            {
                Coverage = source.Coverage,
                AltitudeFt = source.AltitudeFt,
                Ceiling = source.Ceiling
            };
        }

        private Visibility MapToVisibility(ForeFlightVisibility source)
        {
            if (source == null) return null;

            return new Visibility
            {
                DistanceSm = source.DistanceSm,
                DistanceQualifier = source.DistanceQualifier,
                PrevailingVisSm = source.PrevailingVisSm,
                PrevailingVisDistanceQualifier = source.PrevailingVisDistanceQualifier
            };
        }

        private Wind MapToWind(ForeFlightWind source)
        {
            if (source == null) return null;

            return new Wind
            {
                SpeedKts = source.SpeedKts,
                Direction = source.Direction,
                VariableFrom = source.VariableFrom,
                VariableTo = source.VariableTo,
                From = source.From,
                To = source.To,
                Variable = source.Variable
            };
        }

        private ForecastPeriod MapToForecastPeriod(ForeFlightForecastPeriod source)
        {
            if (source == null) return null;

            return new ForecastPeriod
            {
                DateStart = source.DateStart,
                DateEnd = source.DateEnd
            };
        }

        private ForecastCondition MapToForecastCondition(ForeFlightForecastCondition source)
        {
            if (source == null) return null;

            return new ForecastCondition
            {
                DateIssued = source.DateIssued,
                Text = source.Text,
                Lat = source.Lat,
                Lon = source.Lon,
                ElevationFt = source.ElevationFt,
                RelativeHumidity = source.RelativeHumidity,
                FlightRules = source.FlightRules,
                CloudLayers = source.CloudLayers?.Select(MapToCloudLayer).ToList(),
                CloudLayersV2 = source.CloudLayersV2?.Select(MapToCloudLayer).ToList(),
                Weather = source.Weather?.ToList(),
                Visibility = MapToVisibility(source.Visibility),
                Wind = MapToWind(source.Wind),
                Change = source.Change,
                Period = MapToForecastPeriod(source.Period)
            };
        }
    }
}
