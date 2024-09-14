namespace WeatherApi.Domain.Helper
{
    public static class IcaoHelper
    {
        // *Insert more validation that I know nothing about*
        public static bool IsValidIcao(string icao)
        {
            return icao.Length == 4;
        }
    }
}
