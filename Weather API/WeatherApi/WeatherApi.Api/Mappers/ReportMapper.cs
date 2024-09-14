using WeatherApi.Api.ViewModels;
using WeatherApi.Domain.Models;

namespace WeatherApi.Api.Mappers
{
    public class ReportMapper : IReportMapper
    {
        public WeatherReportViewModel Map(ReportModel report)
        {
            return new WeatherReportViewModel
            {
                Conditions = MapToConditionsViewModel(report.Conditions),
                Forecast = MapToForecastViewModel(report.Forecast)
            };
        }

        private WeatherConditionsViewModel MapToConditionsViewModel(WeatherConditions source)
        {
            if (source == null) return null;

            return new WeatherConditionsViewModel
            {
                DateIssued = source.DateIssued,
                Text = source.Text,
                ElevationFt = source.ElevationFt,
                RelativeHumidity = source.RelativeHumidity,
                Visibility = MapToVisibilityViewModel(source.Visibility),
                Wind = MapToWindViewModel(source.Wind),
                Ident = source.Ident,
                TempC = source.TempC,
                PressureHg = source.PressureHg,
                DensityAltitudeFt = source.DensityAltitudeFt,
                DewpointC = source.DewpointC
            };
        }

        private WeatherForecastViewModel MapToForecastViewModel(WeatherForecast source)
        {
            if (source == null) return null;

            return new WeatherForecastViewModel
            {
                Text = source.Text,
                Ident = source.Ident,
                DateIssued = source.DateIssued,
                Period = MapToForecastPeriodViewModel(source.Period),
                ElevationFt = source.ElevationFt,
                Conditions = source.Conditions?.Select(MapToForecastConditionViewModel).ToList()
            };
        }

        private VisibilityViewModel MapToVisibilityViewModel(Visibility source)
        {
            if (source == null) return null;

            return new VisibilityViewModel
            {
                DistanceSm = source.DistanceSm
            };
        }

        private WindViewModel MapToWindViewModel(Wind source)
        {
            if (source == null) return null;

            return new WindViewModel
            {
                SpeedKts = source.SpeedKts,
                Direction = source.Direction
            };
        }

        private ForecastPeriodViewModel MapToForecastPeriodViewModel(ForecastPeriod source)
        {
            if (source == null) return null;

            return new ForecastPeriodViewModel
            {
                DateStart = source.DateStart,
                DateEnd = source.DateEnd
            };
        }

        private ForecastConditionViewModel MapToForecastConditionViewModel(ForecastCondition source)
        {
            if (source == null) return null;

            return new ForecastConditionViewModel
            {
                DateIssued = source.DateIssued,
                Text = source.Text,
                ElevationFt = source.ElevationFt,
                RelativeHumidity = source.RelativeHumidity,
                Visibility = MapToVisibilityViewModel(source.Visibility),
                Wind = MapToWindViewModel(source.Wind),
                Change = source.Change,
                Period = MapToForecastPeriodViewModel(source.Period)
            };
        }
    }
}
