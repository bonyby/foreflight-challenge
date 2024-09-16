namespace WeatherApi.Domain.Models
{
    public class ReportModel
    { 
        public WeatherConditions Conditions { get; set; }
        public WeatherForecast Forecast { get; set; }

        public NearbyReport NearbyReportStatus { get; set; }
    }

    public class NearbyReport
    {
        public bool IsFromNearbyAirport { get; set; }

        public string OriginalIcao { get; set; }
    }

    public class BaseConditions
    {
        public string DateIssued { get; set; }
        public string Text { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double ElevationFt { get; set; }
        public int RelativeHumidity { get; set; }
        public string FlightRules { get; set; }
        public List<CloudLayer> CloudLayers { get; set; }
        public List<CloudLayer> CloudLayersV2 { get; set; }
        public List<string> Weather { get; set; }
        public Visibility Visibility { get; set; }
        public Wind Wind { get; set; }
    }

    public class WeatherConditions : BaseConditions
    {
        public string Ident { get; set; }
        public double TempC { get; set; }
        public double PressureHg { get; set; }
        public double PressureHpa { get; set; }
        public bool ReportedAsHpa { get; set; }
        public double DensityAltitudeFt { get; set; }
        public double DewpointC { get; set; }
    }

    public class CloudLayer
    {
        public string Coverage { get; set; }
        public double AltitudeFt { get; set; }
        public bool Ceiling { get; set; }
    }

    public class Visibility
    {
        public double DistanceSm { get; set; }
        public int DistanceQualifier { get; set; }
        public double PrevailingVisSm { get; set; }
        public int PrevailingVisDistanceQualifier { get; set; }
    }

    public class Wind
    {
        public double SpeedKts { get; set; }
        public int Direction { get; set; }
        public int VariableFrom { get; set; }
        public int VariableTo { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public bool Variable { get; set; }
    }

    public class WeatherForecast
    {
        public string Text { get; set; }
        public string Ident { get; set; }
        public string DateIssued { get; set; }
        public ForecastPeriod Period { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double ElevationFt { get; set; }
        public List<ForecastCondition> Conditions { get; set; }
    }

    public class ForecastPeriod
    {
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
    }

    public class ForecastCondition : BaseConditions
    {
        public string Change { get; set; }
        public ForecastPeriod Period { get; set; }
    }
}
