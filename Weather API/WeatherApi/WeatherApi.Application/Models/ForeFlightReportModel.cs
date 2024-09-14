namespace WeatherApi.Application.Models
{
    public class ForeFlightReportModel
    {
        public ForeFlightReport Report { get; set; }
    }

    public class ForeFlightReport
    {
        public ForeFlightWeatherConditions Conditions { get; set; }
        public ForeFlightWeatherForecast Forecast { get; set; }
        public ForeFlightWindsAloft WindsAloft { get; set; }
    }

    public class ForeFlightBaseConditions
    {
        public string DateIssued { get; set; }
        public string Text { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double ElevationFt { get; set; }
        public int RelativeHumidity { get; set; }
        public string FlightRules { get; set; }
        public List<ForeFlightCloudLayer> CloudLayers { get; set; }
        public List<ForeFlightCloudLayer> CloudLayersV2 { get; set; }
        public List<string> Weather { get; set; }
        public ForeFlightVisibility Visibility { get; set; }
        public ForeFlightWind Wind { get; set; }
    }

    public class ForeFlightWeatherConditions : ForeFlightBaseConditions
    {
        public string Ident { get; set; }
        public double TempC { get; set; }
        public double PressureHg { get; set; }
        public double PressureHpa { get; set; }
        public bool ReportedAsHpa { get; set; }
        public double DensityAltitudeFt { get; set; }
        public double DewpointC { get; set; }
    }

    public class ForeFlightCloudLayer
    {
        public string Coverage { get; set; }
        public double AltitudeFt { get; set; }
        public bool Ceiling { get; set; }
    }

    public class ForeFlightVisibility
    {
        public double DistanceSm { get; set; }
        public int DistanceQualifier { get; set; }
        public double PrevailingVisSm { get; set; }
        public int PrevailingVisDistanceQualifier { get; set; }
    }

    public class ForeFlightWind
    {
        public double SpeedKts { get; set; }
        public int Direction { get; set; }
        public int VariableFrom { get; set; }
        public int VariableTo { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public bool Variable { get; set; }
    }

    public class ForeFlightWeatherForecast
    {
        public string Text { get; set; }
        public string Ident { get; set; }
        public string DateIssued { get; set; }
        public ForeFlightForecastPeriod Period { get; set; }
        public double Lat { get; set; }
        public double Lon { get; set; }
        public double ElevationFt { get; set; }
        public List<ForeFlightForecastCondition> Conditions { get; set; }
    }

    public class ForeFlightForecastPeriod
    {
        public string DateStart { get; set; }
        public string DateEnd { get; set; }
    }

    public class ForeFlightForecastCondition : ForeFlightBaseConditions
    {
        public string Change { get; set; }
        public ForeFlightForecastPeriod Period { get; set; }
    }

    public class ForeFlightWindsAloft
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string DateIssued { get; set; }
        public List<ForeFlightWindAloftCondition> WindsAloftConditions { get; set; }
    }

    public class ForeFlightWindAloftCondition
    {
        public string ValidTime { get; set; }
        public ForeFlightForecastPeriod Period { get; set; }
        public Dictionary<string, ForeFlightWindTemp> WindTemps { get; set; }
    }

    public class ForeFlightWindTemp
    {
        public int DirectionFromTrue { get; set; }
        public double Knots { get; set; }
        public double Celsius { get; set; }
        public int Altitude { get; set; }
        public bool IsLightAndVariable { get; set; }
        public bool IsGreaterThan199Knots { get; set; }
        public bool Turbulence { get; set; }
        public bool Icing { get; set; }
    }
}
