using Microsoft.Extensions.Logging;
using WeatherApi.Application.Clients;
using WeatherApi.Application.Models;

namespace WeatherApi.Infrastructure.Clients
{
    public class ForeFlightClient : RestClient, IForeFlightClient
    {
        private Dictionary<string, string> _noMatchIcaos = new Dictionary<string, string>()
        {
            ["EKHG"] = "EKKA",
            ["EKST"] = "EKOD",
            ["EKVH"] = "EKYT"
        };

        public ForeFlightClient(HttpClient httpClient, ILogger<ForeFlightClient> logger) : base(httpClient, logger) { }

        public async Task<ForeFlightReportModel?> GetReport(string icao)
        {
            if (_noMatchIcaos.ContainsKey(icao.ToUpper())) {
                return null;
            }

            // Simulating slow API
            await Task.Delay(2000);

            var path = $"/weather/report/{icao}";

            var response = await Get<ForeFlightReportModel>(path);

            return response;
        }

        public async Task<ForeFlightReportModel?> GetReportFromNearbyAirport(string icao)
        {
            if (_noMatchIcaos.ContainsKey(icao.ToUpper()))
            {
                return await GetReport(_noMatchIcaos[icao.ToUpper()]);
            }

            return null;
        }
    }
}
