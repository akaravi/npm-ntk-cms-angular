import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {UtilsService} from '../services/utils.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CronIndex, CronOptionsInterface, CronStreamValues, DaysOfWeek, Months, SelectOptionInterface} from '../models.model';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'mat-cron-editor',
  templateUrl: './mat-cron-editor.component.html',
  styleUrls: ['./mat-cron-editor.component.scss']
})
export class MatCronEditorComponent implements OnInit, OnDestroy {

  @Output() cronEvent: EventEmitter<CronStreamValues> = new EventEmitter<CronStreamValues>();

  @Input() cronOptions: CronOptionsInterface = {
    includeMinutes: false,
    includeHours: false,
    includeDates: false,
    includeMonths: false,
    includeDays: false,
    includeMinutesBetween: false,
    includeHoursBetween: false,
    includeDatesBetween: false,
    includeMonthsBetween: false,
    includeDaysBetween: false,
    showHints: true,
    defaultCron: '0 0 0 0 0',
    flexDirection: 'row'
  };

  cronEditorForm: FormGroup;
  minutesBetween = this.utils.rangeOptions(60, 'minute');
  hoursBetween = this.utils.rangeOptions(24, 'hour');
  datesBetween = this.utils.rangeOptions(31, 'day');
  monthsBetween = this.utils.rangeOptions(12, 'month');
  daysBetween = this.utils.rangeOptions(7, 'weekday');

  minutes = this.utils.range(60, true);
  hours = this.utils.range(24, true);
  monthDays = this.utils.range(31);
  weekDays = Object.keys(DaysOfWeek).map(day => {
    return {
      value: DaysOfWeek[day],
      friendly: day
    };
  });
  months = Object.keys(Months).map(month => {
    return {
      value: Months[month],
      friendly: month
    };
  });
  private destroyer$: ReplaySubject<boolean> = new ReplaySubject<boolean>(null);

  cronString = '* * * * *';

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.cronString = this.cronOptions.defaultCron;
    this.utils.validateCron(this.cronOptions.defaultCron);
    this.cronEditorForm = new FormGroup({
      minutesBetweenCronControl: new FormControl(''),
      hoursBetweenCronControl: new FormControl(''),
      datesBetweenCronControl: new FormControl(''),
      daysBetweenCronControl: new FormControl(''),
      monthsBetweenCronControl: new FormControl(''),

      minutesCronControl: new FormControl([]),
      hoursCronControl: new FormControl([]),
      datesCronControl: new FormControl([]),
      monthsCronControl: new FormControl([]),
      daysCronControl: new FormControl([])
    });
    this.setControlValues();

    this.cronEditorForm.valueChanges.pipe(takeUntil(this.destroyer$))
      .subscribe(val => {
        this.emitCron();
      });
  }

  setControlValues(): void {
    if (this.cronOptions?.defaultCron) {
      const [min, hrs, dts, mos, dys] = this.cronOptions.defaultCron.split(' ');
      const minSegments = min.split(',');
      const btwnMins = minSegments.filter(part => /\*\/\d/g.test(part));
      const restMins = minSegments.filter(part => !/\*\/\d/g.test(part));
      if (btwnMins[0]) {
        this.cronEditorForm.get('minutesBetweenCronControl').setValue(btwnMins[0]);
      }
      if (restMins.length){
        this.cronEditorForm.get('minutesCronControl').setValue(this.utils.deFormatSequentialValues(restMins.join(','), 60, true));
      }

      const hrSegments = hrs.split(',');
      const btwnHrs = hrSegments.filter(part => /\*\/\d/g.test(part));
      const restHrs = hrSegments.filter(part => !/\*\/\d/g.test(part));
      if (btwnHrs[0]) {
        this.cronEditorForm.get('hoursBetweenCronControl').setValue(btwnHrs[0]);
      }
      if (restHrs.length) {
        this.cronEditorForm.get('hoursCronControl').setValue(this.utils.deFormatSequentialValues(restHrs.join(','), 24, true));
      }

      const dtSegments = dts.split(',');
      const btwnDts = dtSegments.filter(part => /\*\/\d/g.test(part));
      const restDts = dtSegments.filter(part => !/\*\/\d/g.test(part));
      if (btwnDts[0]) {
        this.cronEditorForm.get('datesBetweenCronControl').setValue(btwnDts[0]);
      }
      if (restDts.length) {
        this.cronEditorForm.get('datesCronControl').setValue(this.utils.deFormatSequentialValues(restDts.join(','), 31));
      }

      const dySegments = dys.split(',');
      const btwnDys = dySegments.filter(part => /\*\/\d/g.test(part));
      const restDys = dySegments.filter(part => !/\*\/\d/g.test(part));
      if (btwnDys[0]) {
        this.cronEditorForm.get('daysBetweenCronControl').setValue(btwnDys[0]);
      }
      if (restDys.length) {
        this.cronEditorForm.get('daysCronControl').setValue(this.utils.deFormatSequentialValues(restDys.join(','), 7, true));
      }

      const moSegments = mos.split(',');
      const btwnMos = moSegments.filter(part => /\*\/\d/g.test(part));
      const restMos = moSegments.filter(part => !/\*\/\d/g.test(part));
      if (btwnMos[0]) {
        this.cronEditorForm.get('monthsBetweenCronControl').setValue(btwnMos[0]);
      }
      if (restMos.length) {
        this.cronEditorForm.get('monthsCronControl').setValue(this.utils.deFormatSequentialValues(restMos.join(','), 12, true));
      }
    }
  }

  emitCron(): void {
    this.cronEvent.emit({
      cronForm: this.cronEditorForm,
      cronValue: this.finalCronFormat()
    });
  }

  selectAll(controlName: string, values: SelectOptionInterface[], index: CronIndex): void {
    const control = this.cronEditorForm.get(controlName);
    const onlyNumbers = values.map(item => item.value);
    control.setValue(onlyNumbers);
  }

  unSelectAll(controlName: string): void {
    this.cronEditorForm.get(controlName).setValue([]);
  }

  finalCronFormat(): string {
    let minutesValue: string;
    let hoursValue: string;
    let datesValue: string;
    let monthsValue: string;
    let daysValue: string;
    // Handle minutes
    const minutesBetween = this.cronEditorForm.get('minutesBetweenCronControl').value;
    const minutes = this.utils.formatSequentialValues(this.cronEditorForm.get('minutesCronControl').value, 'minutes');
    if (minutesBetween && minutes.length) {
      minutesValue = [minutesBetween, ...minutes.split(',')].join(',');
    } else if (minutesBetween && !minutes.length) {
      minutesValue = minutesBetween;
    } else {
      minutesValue = minutes;
    }
    // Handle hours
    const hoursBetween = this.cronEditorForm.get('hoursBetweenCronControl').value;
    const hours = this.utils.formatSequentialValues(this.cronEditorForm.get('hoursCronControl').value, 'hours');
    if (hoursBetween && hours.length) {
      hoursValue = [hoursBetween, ...hours.split(',')].join(',');
    } else if (hoursBetween && !hours.length) {
      hoursValue = hoursBetween;
    } else {
      hoursValue = hours;
    }
    // Handle dates
    const datesBetween = this.cronEditorForm.get('datesBetweenCronControl').value;
    const dates = this.utils.formatSequentialValues(this.cronEditorForm.get('datesCronControl').value, 'dates');
    if (datesBetween && dates.length) {
      datesValue = [datesBetween, ...dates.split(',')].join(',');
    } else if (datesBetween && !dates.length) {
      datesValue = datesBetween;
    } else {
      datesValue = dates;
    }
    // Handle months
    const monthsBetween = this.cronEditorForm.get('monthsBetweenCronControl').value;
    const months = this.utils.formatSequentialValues(this.cronEditorForm.get('monthsCronControl').value, 'months');
    if (monthsBetween && months.length) {
      monthsValue = [monthsBetween, ...months.split(',')].join(',');
    } else if (monthsBetween && !months.length) {
      monthsValue = monthsBetween;
    } else {
      monthsValue = months;
    }
    // Handle days
    const daysBetween = this.cronEditorForm.get('daysBetweenCronControl').value;
    const days = this.utils.formatSequentialValues(this.cronEditorForm.get('daysCronControl').value, 'days');
    if (daysBetween && days.length) {
      daysValue = [daysBetween, ...days.split(',')].join(',');
    } else if (daysBetween && !days.length) {
      daysValue = daysBetween;
    } else {
      daysValue = days;
    }
    return `${minutesValue} ${hoursValue} ${datesValue} ${monthsValue} ${daysValue}`;
  }

  ngOnDestroy(): void {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }
}
