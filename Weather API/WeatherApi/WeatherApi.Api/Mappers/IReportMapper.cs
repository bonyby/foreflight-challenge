using WeatherApi.Api.ViewModels;
using WeatherApi.Domain.Models;

namespace WeatherApi.Api.Mappers
{
    public interface IReportMapper
    {
        public WeatherReportViewModel Map(ReportModel report);
    }
}
