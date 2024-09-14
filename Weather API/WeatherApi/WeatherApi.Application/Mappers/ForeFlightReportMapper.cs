using WeatherApi.Application.Models;
using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Mappers
{
    public class ForeFlightReportMapper : IForeFlightReportMapper
    {
        public ReportModel Map(ForeFlightReportModel report)
        {
            return new ReportModel();
        }
    }
}
