using WeatherApi.Application.Models;
using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Mappers
{
    public interface IForeFlightReportMapper
    {
        public ReportModel Map(ForeFlightReportModel report);
    }
}
