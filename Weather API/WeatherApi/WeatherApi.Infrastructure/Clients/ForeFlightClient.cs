using Microsoft.Extensions.Logging;
using WeatherApi.Application.Clients;
using WeatherApi.Application.Models;

namespace WeatherApi.Infrastructure.Clients
{
    public class ForeFlightClient : RestClient, IForeFlightClient
    {
        public ForeFlightClient(HttpClient httpClient, ILogger<ForeFlightClient> logger) : base(httpClient, logger) { }

        public async Task<ForeFlightReportModel?> GetReport(string icao)
        {
            var path = $"/weather/report/{icao}";

            var response = await Get<ForeFlightReportModel>(path);

            return response;
        }
    }
}
