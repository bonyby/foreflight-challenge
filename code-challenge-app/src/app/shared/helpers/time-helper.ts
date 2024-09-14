import * as moment from 'moment';

export default class TimeHelper {
  /**
   * Formats the supplied date to an easy readable format
   * @param date - Date to be formatted
   * @returns
   */
  static FormatTime(date: string) {
    return moment(date).format('hh:mm A [CEST]');
  }
}
