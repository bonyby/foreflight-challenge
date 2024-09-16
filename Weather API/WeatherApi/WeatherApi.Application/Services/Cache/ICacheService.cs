namespace WeatherApi.Application.Services.Cache
{
    public interface ICacheService
    {
        public Task<T> GetOrCreate<T>(string cacheKey, Func<Task<T>> entityFactory, float lifeTimeMinutes);
    }
}
