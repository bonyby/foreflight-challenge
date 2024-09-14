using Microsoft.AspNetCore.Mvc;
using WeatherApi.Api.Mappers;
using WeatherApi.Api.ViewModels;
using WeatherApi.Application.Services.Report;

namespace WeatherApi.Api.Controllers
{
    // TODO: Authentication?
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly ILogger<ReportController> _logger;
        private readonly IReportService _reportService;
        private readonly IReportMapper _reportMapper;

        public ReportController(ILogger<ReportController> logger, IReportService reportService, IReportMapper reportMapper)
        {
            _logger = logger;
            _reportService = reportService;
            _reportMapper = reportMapper;
        }

        [HttpGet]
        [Route("{icao}")]
        [ProducesResponseType(typeof(WeatherReportViewModel), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(WeatherReportViewModel), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<WeatherReportViewModel>> Get([FromRoute] string icao)
        {
            _logger.LogInformation($"Started fetching report for ICAO {icao}");

            var report = await _reportService.GetReport(icao);

            if (report == null)
            {
                _logger.LogInformation($"Invalid ICAO, '{icao}', yielded no response");
                return NotFound();
            }

            var result = _reportMapper.Map(report);

            _logger.LogInformation($"Finished fetching report for ICAO {icao}");
            return Ok(result);
        }
    }
}
