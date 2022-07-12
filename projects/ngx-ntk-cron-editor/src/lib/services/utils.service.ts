import {Injectable} from '@angular/core';
import {CronUnits, SelectOptionInterface} from '../models.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  range(length: number, startFromZero?: boolean): SelectOptionInterface[] {
    return Array(length).fill(1).map((x, y) => {
      if (length === 24) {
        const friendly = amPm(startFromZero ? x + y - 1 : x + y);
        return {
          value: startFromZero ? x + y - 1 : x + y,
          friendly
        };
      }
      return {
        value: startFromZero ? x + y - 1 : x + y,
        friendly: startFromZero ? x + y - 1 : x + y
      };
    });

    function amPm(hour: number): any {
      let hrStr;
      let hrMod;
      if (hour >= 12) {
        hrMod = hour - 12;
        hrStr = `${hour}  (${hrMod} PM)`;
        if (hour === 12) {
          hrStr = `${hour}  (12 PM)`;
        }
      } else {
        hrStr = `${hour}  (${hour} AM)`;
        if (hour === 0) {
          hrStr = `${hour}  (12 AM)`;
        }
      }
      return hrStr;
    }
  }

  rangeOptions(length: number, unit: string): SelectOptionInterface[] {
    const arr = Array(length).fill(1).map((x, y) => {
      return {
        value: `*/${x + y}`,
        friendly: `Every ${x + y} ${unit}${x + y > 1 ? 's' : ''}`
      };
    });
    return [{value: '', friendly: 'n/a'}, ...arr];
  }

  plainRange(length: number, startFromZero: boolean): number[] {
    return Array(length).fill(1).map((x, y) => {
      return startFromZero ? x + y - 1 : x + y;
    });
  }

  formatSequentialValues(arr: number[], type: CronUnits): string {
    const obj = {};
    let key = 0;
    let prev;
    let cronString = '';
    arr.forEach((item) => {
      if (parseInt(`${item}`, 10) - 1 !== parseInt(`${prev}`, 10)) {
        key++;
      }
      if (!obj[key]) {
        obj[key] = [item];
      } else {
        obj[key].push(item);
      }
      prev = item;
    });

    for (const prop in obj) {
      if (obj[prop].length === 1) {
        cronString += obj[prop][0] + ',';
      } else if (obj[prop].length > 1) {
        cronString += obj[prop][0] + '-' + obj[prop][obj[prop].length - 1] + ',';
      }
    }
    cronString = cronString.slice(0, -1);
    if (type === 'minutes' && cronString === '0-59') {
      return '*';
    } else if (type === 'hours' && cronString === '0-23') {
      return '*';
    } else if (type === 'dates' && cronString === '1-31') {
      return '*';
    } else if (type === 'months' && cronString === '1-12') {
      return '*';
    } else if (type === 'days' && cronString === '0-6') {
      return '*';
    }
    return cronString;
  }

  deFormatSequentialValues(val: string, range?: number, startFromZero?: boolean): any[] {
    if (val === '*') {
      return this.plainRange(range, startFromZero);
    }
    if (val.length === 1) {
      return [parseInt(val, 10)];
    }
    let split;
    const res = [];
    if (val.indexOf(',') > -1) {
      split = val.split(',');
    }
    if (split?.length) {
      split.forEach(item => {
        if (item.indexOf('-') > -1) {
          handleDashes(item);
        } else {
          res.push(item);
        }
      });
    } else if (val.indexOf('-') > -1) {
      handleDashes(val);
    } else {
      res.push(val);
    }
    return res.map(item => {
      return parseInt(item, 10);
    });

    function handleDashes(withDash: string): void {
      const ends = withDash.split('-');
      const first = parseInt(ends[0], 10);
      const last = parseInt(ends[1], 10);
      for (let i = first; i <= last; i++) {
        res.push(i);
      }
    }
  }

  validateCron(cron: string): any {
    const segments = cron.split(' ');
    if (!segments) {
      throw new Error('Must provide default cron');
    }
    if (segments.length !== 5) {
      throw new Error('Cron expression must have 5 segments: minutes, hours, dates(of the months), months, days(of the week)');
    }
  }
}
