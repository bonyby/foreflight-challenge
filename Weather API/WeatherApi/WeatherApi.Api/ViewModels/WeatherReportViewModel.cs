namespace WeatherApi.Api.ViewModels
{
    public class WeatherReportViewModel
    {
        public WeatherConditionsViewModel Conditions { get; set; }
        public WeatherForecastViewModel Forecast { get; set; }
    }

    public class BaseConditionsViewModel
    {
        public string DateIssued { get; set; }
        public string Text { get; set; }
        public double ElevationFt { get; set; }
        public int RelativeHumidity { get; set; }
        public VisibilityViewModel Visibility { get; set; }
        public WindViewModel Wind { get; set; }
    }

    public class WeatherConditionsViewModel : BaseConditionsViewModel
    {
        public string Ident { get; set; }
        public double TempC { get; set; }
        public double PressureHg { get; set; }
        public double DensityAltitudeFt { get; set; }
        public double DewpointC { get; set; }
    }

    public class VisibilityViewModel
    {
        public double DistanceSm { get; set; }
    }

    public class WindViewModel
    {
        public double SpeedKts { get; set; }
        public int Direction { get; set; }
    }

    public class WeatherForecastViewModel
    {
        public string Text { get; set; }
        public string Ident { get; set; }
        public string DateIssued { get; set; }
        public ForecastPeriodViewModel Period { get; set; }
        public double ElevationFt { get; set; }
        public List<ForecastConditionViewModel> Conditions { get; set; }
    }

    public class ForecastPeriodViewModel
    {
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
    }

    public class ForecastConditionViewModel : BaseConditionsViewModel
    {
        public string Change { get; set; }
        public ForecastPeriodViewModel Period { get; set; }
    }
}
