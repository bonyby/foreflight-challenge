using Microsoft.Extensions.Logging;
using WeatherApi.Application.Clients;
using WeatherApi.Application.Mappers;
using WeatherApi.Application.Services.Cache;
using WeatherApi.Domain.Helper;
using WeatherApi.Domain.Models;

namespace WeatherApi.Application.Services.Report
{
    public class ForeFlightReportService : IReportService
    {
        private readonly IForeFlightClient _foreFlightClient;
        private readonly ILogger<ForeFlightReportService> _logger;
        private readonly IForeFlightReportMapper _foreFlightReportMapper;
        private readonly ICacheService _cacheService;

        public ForeFlightReportService(IForeFlightClient foreFlightClient, ILogger<ForeFlightReportService> logger, IForeFlightReportMapper foreFlightReportMapper, ICacheService cacheService)
        {
            _foreFlightClient = foreFlightClient;
            _logger = logger;
            _foreFlightReportMapper = foreFlightReportMapper;
            _cacheService = cacheService;
        }

        public async Task<ReportModel?> GetReport(string icao)
        {
            if (!IcaoHelper.IsValidIcao(icao))
            {
                _logger.LogInformation($"'{icao}' is an invalid ICAO");
                return null;
            }

            // Possible update: Could set lifetime to be dependent on expiration date of report
            var report = await _cacheService.GetOrCreate(icao.ToLower(),
                () => _foreFlightClient.GetReport(icao),
                lifeTimeMinutes: 15);

            if (report == null)
            {
                _logger.LogInformation($"ForeFlight API yielded no result for ICAO {icao}. Trying to fetch report from nearby airport");
                return await TryGetReportFromNearbyAirport(icao);
            }

            return _foreFlightReportMapper.Map(report);
        }

        private async Task<ReportModel?> TryGetReportFromNearbyAirport(string icao)
        {
            var report = await _foreFlightClient.GetReportFromNearbyAirport(icao);

            if (report == null)
            {
                return null;
            }

            var result = _foreFlightReportMapper.Map(report);

            result.NearbyReportStatus = new NearbyReport
            {
                IsFromNearbyAirport = true,
                OriginalIcao = icao
            };

            return result;
        }
    }
}
