import {ngxTranslatePrefix} from '../pipes/prefix.pipe';

export const en = {
  [ngxTranslatePrefix]: {
    TABS: {
      MINUTES: 'Minutes',
      HOURLY: 'Hourly',
      DAILY: 'Daily',
      WEEKLY: 'Weekly',
      MONTHLY: 'Monthly',
      YEARLY: 'Yearly',
      ADVANCED: 'Advanced'
    },
    MINUTES: {
      EVERY: 'Every',
      MINUTES: 'minute(s)',
      ON_SECOND: 'on second'
    },
    HOURLY: {
      EVERY: 'Every',
      HOURS: 'hour(s)',
      ON_MINUTE: 'on minute',
      ON_SECOND: 'and second'
    },
    DAILY: {
      EVERY: 'Every',
      DAYS: 'day(s) at',
      WORKING_DAY: 'Every working day at'
    },
    WEEKLY: {
      AT: 'at'
    },
    MONTHLY: {
      ON: 'On the',
      OF_EVERY: 'of every',
      MONTHS: 'month(s)',
      NEAREST_WEEKDAY: 'during the nearest weekday',
      AT: 'at',
      STARTING_IN: 'starting in'
    },
    YEARLY: {
      EVERY: 'Every',
      ON: 'on the',
      AT: 'at',
      OF: 'of',
      NEAREST_WEEKDAY: 'during the nearest weekday'
    },
    ADVANCED: {
      CRON: 'Cron Expression'
    },
    MONTH_DAY: {
      LAST_DAY: 'Last Day',
      LAST_WEEKDAY: 'Last Weekday',
      FIRST_WEEKDAY: 'First Weekday',
      DAY_N: 'Day {{n}}'
    },
    MONTH_WEEK: {
      FIRST: 'First',
      SECOND: 'Second',
      THIRD: 'Third',
      FOURTH: 'Fourth',
      FIFTH: 'Fifth',
      LAST: 'Last'
    },
    MONTH: {
      JANUARY: 'January',
      FEBRUARY: 'February',
      MARCH: 'March',
      APRIL: 'April',
      MAY: 'May',
      JUNE: 'June',
      JULY: 'July',
      AUGUST: 'August',
      SEPTEMBER: 'September',
      OCTOBER: 'October',
      NOVEMBER: 'November',
      DECEMBER: 'December'
    },
    WEEK: {
      MON: 'Monday',
      TUE: 'Tuesday',
      WED: 'Wednesday',
      THU: 'Thursday',
      FRI: 'Friday',
      SAT: 'Saturday',
      SUN: 'Sunday',
    },
    HOUR_TYPES: {
      AM: 'AM',
      PM: 'PM'
    },
    VALIDATION_MESSAGE: {
      NULL: 'Cron expression cannot be null',
      SEGMENTS: 'Invalid cron expression, there must be {{n}} segments'
    }
  }
};
