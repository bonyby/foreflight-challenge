using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Services.Report
{
    public interface IReportService
    {
        public Task<ReportModel?> GetReport(string icao);
    }
}
