using Microsoft.Extensions.Caching.Memory;

namespace WeatherApi.Application.Services.Cache
{
    public class CacheService : ICacheService
    {
        private readonly IMemoryCache _cache;

        public CacheService(IMemoryCache cache)
        {
            _cache = cache;
        }

        public async Task<T> GetOrCreate<T>(string cacheKey, Func<Task<T>> entityFactory, float lifeTimeMinutes = 5)
        {
            var entity = await _cache.GetOrCreateAsync(cacheKey, entry =>
            {
                entry.AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(lifeTimeMinutes);

                return entityFactory.Invoke();
            });

            return entity;
        }
    }
}
