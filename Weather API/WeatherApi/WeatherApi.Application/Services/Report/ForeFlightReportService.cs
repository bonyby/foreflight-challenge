using Microsoft.Extensions.Logging;
using WeatherApi.Application.Clients;
using WeatherApi.Application.Mappers;
using WeatherApi.Domain.Helper;
using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Services.Report
{
    public class ForeFlightReportService : IReportService
    {
        private readonly IForeFlightClient _foreFlightClient;
        private readonly ILogger<ForeFlightReportService> _logger;
        private readonly IForeFlightReportMapper _foreFlightReportMapper;

        public ForeFlightReportService(IForeFlightClient foreFlightClient, ILogger<ForeFlightReportService> logger, IForeFlightReportMapper foreFlightReportMapper)
        {
            _foreFlightClient = foreFlightClient;
            _logger = logger;
            _foreFlightReportMapper = foreFlightReportMapper;
        }

        public async Task<ReportModel?> GetReport(string icao)
        {
            if (!IcaoHelper.IsValidIcao(icao))
            {
                _logger.LogInformation($"'{icao}' is an invalid ICAO");
                return null;
            }

            var report = await _foreFlightClient.GetReport(icao);

            if (report == null)
            {
                _logger.LogInformation($"ForeFlight API yielded no result for ICAO {icao}");
                return null;
            }

            return _foreFlightReportMapper.Map(report);
        }
    }
}
