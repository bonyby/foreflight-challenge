using Microsoft.Extensions.Logging;
using System.Text.Json;

namespace WeatherApi.Infrastructure.Clients
{
    public abstract class RestClient
    {
        private readonly ILogger<RestClient> _logger;
        private readonly HttpClient _httpClient;

        protected RestClient(HttpClient httpClient, ILogger<RestClient> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
        }

        protected async Task<T?> Get<T>(string path)
        {
            try
            {
                var response = await _httpClient.GetAsync(path);

                var content = await response.Content.ReadAsStringAsync();

                return JsonSerializer.Deserialize<T>(content);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error during GET call to {_httpClient.BaseAddress + path}. Exception: {ex.ToString()}");
                return default;
            }
        }
    }
}
