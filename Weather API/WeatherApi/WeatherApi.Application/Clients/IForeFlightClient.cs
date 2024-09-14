using WeatherApi.Application.Models;

namespace WeatherApi.Application.Clients
{
    public interface IForeFlightClient
    {
        public Task<ForeFlightReportModel?> GetReport(string icao);
    }
}
