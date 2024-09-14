using WeatherApi.Api.ViewModels;
using WeatherApi.Domain.Models;

namespace WeatherApi.Api.Mappers
{
    public class ReportMapper : IReportMapper
    {
        public WeatherReportViewModel Map(ReportModel report)
        {
            return new WeatherReportViewModel();
        }
    }
}
