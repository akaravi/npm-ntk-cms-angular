import {ngxTranslatePrefix} from '../pipes/prefix.pipe';

export const ru = {
  [ngxTranslatePrefix]: {
    TABS: {
      MINUTES: 'Минута',
      HOURLY: 'Час',
      DAILY: 'День',
      WEEKLY: 'Неделя',
      MONTHLY: 'Месяц',
      YEARLY: 'Год',
      ADVANCED: 'Продвинутый'
    },
    MINUTES: {
      EVERY: 'Каждые(-ую)',
      MINUTES: 'минут(-у)',
      ON_SECOND: 'в секунду:'
    },
    HOURLY: {
      EVERY: 'Каждый(-ые)',
      HOURS: 'час(-ов)',
      ON_MINUTE: 'в минуту:',
      ON_SECOND: 'и секунду:'
    },
    DAILY: {
      EVERY: 'Каждый',
      DAYS: 'день в',
      WORKING_DAY: 'Каждый рабочий день в'
    },
    WEEKLY: {
      AT: 'в'
    },
    MONTHLY: {
      ON: 'В',
      OF_EVERY: 'каждый(-ые)',
      MONTHS: 'месяц(-ев)',
      NEAREST_WEEKDAY: 'в ближайший будний день',
      AT: 'в',
      STARTING_IN: 'начиная с'
    },
    YEARLY: {
      EVERY: 'Каждый',
      ON: 'в',
      AT: 'в',
      OF: '',
      NEAREST_WEEKDAY: 'в ближайший будний день'
    },
    ADVANCED: {
      CRON: 'Cron-выражение'
    },
    MONTH_DAY: {
      LAST_DAY: 'Последний день',
      LAST_WEEKDAY: 'Последний рабочий день',
      FIRST_WEEKDAY: 'Первый рабочий день',
      DAY_N: '{{n}}-й день'
    },
    MONTH_WEEK: {
      FIRST: 'Первый',
      SECOND: 'Второй',
      THIRD: 'Третий',
      FOURTH: 'Четвертый',
      FIFTH: 'Пятый',
      LAST: 'Последний'
    },
    MONTH: {
      JANUARY: 'Январь',
      FEBRUARY: 'Февраль',
      MARCH: 'Март',
      APRIL: 'Апрель',
      MAY: 'Май',
      JUNE: 'Июнь',
      JULY: 'Июль',
      AUGUST: 'Август',
      SEPTEMBER: 'Сентябрь',
      OCTOBER: 'Октябрь',
      NOVEMBER: 'Ноябрь',
      DECEMBER: 'Декабрь'
    },
    WEEK: {
      MON: 'Понедельник',
      TUE: 'Вторник',
      WED: 'Среда',
      THU: 'Четверг',
      FRI: 'Пятница',
      SAT: 'Суббота',
      SUN: 'Воскресенье',
    },
    HOUR_TYPES: {
      AM: 'ДП',
      PM: 'ПП'
    },
    VALIDATION_MESSAGE: {
      NULL: 'Cron-выражение не может быть null',
      SEGMENTS: 'Неверное cron-выражение, должно быть {{n}} сегментов'
    }
  }
};
