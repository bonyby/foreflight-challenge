using Microsoft.Extensions.Configuration;
using WeatherApi.Api.Mappers;
using WeatherApi.Application.Clients;
using WeatherApi.Application.Mappers;
using WeatherApi.Application.Services.Report;
using WeatherApi.Infrastructure.Clients;

namespace WeatherApi.Api.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void RegisterDependencies(this IServiceCollection services, IConfiguration configuration)
        {
            RegisterMappers(services);
            RegisterServices(services);
            RegisterClients(services, configuration);
        }

        private static void RegisterMappers(this IServiceCollection services)
        {
            services.AddScoped<IForeFlightReportMapper, ForeFlightReportMapper>();
            services.AddScoped<IReportMapper, ReportMapper>();
        }

        private static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IReportService, ForeFlightReportService>();
        }

        private static void RegisterClients(IServiceCollection services, IConfiguration configuration)
        {
            services.AddHttpClient<IForeFlightClient, ForeFlightClient>(client =>
            {
                var baseAddress = configuration["ForeFlight:Api:BaseUrl"] ?? throw new NullReferenceException("Found no URL for ForeFlight API");
                client.BaseAddress = new Uri(baseAddress);
                client.DefaultRequestHeaders.Add("X-ForeFlight-Odense", "true");
            });
        }
    }
}
