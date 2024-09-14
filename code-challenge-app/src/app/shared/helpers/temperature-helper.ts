export default class TemperatureHelper {
  /**
   * Converts the provided degrees in celsius to Fahrenheit
   * @param celsius - Degrees in celsius
   * @returns - Degrees in Fahrenheit
   */
  static ToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }
}
