import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ComponentOptionModel,
  ConfigInterface,
  DownloadModeEnum,
  NodeInterface,
  TreeModel,
} from 'projects/ntk-cms-filemanager/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './cron-editor-test.component.html',
  styleUrls: ['./cron-editor-test.component.scss'],
})
export class CronEditorTestComponent {
  faNpm = faNpm;
  faGithub = faGithub;
  hourlyCron: string;
  cronOptions: CronOptionsInterface = {
    includeMinutes: true,
    includeHours: true,
    includeDates: true,
    includeMonths: true,
    includeDays: true,
    includeMinutesBetween: true,
    includeHoursBetween: true,
    includeDaysBetween: true,
    includeMonthsBetween: true,
    includeDatesBetween: true,
    showHints: true,
    defaultCron: '0 0 1 1 *',
    flexDirection: 'row'
  };
  resultingCron = '';

  otherSettings: string[] = ['includeMinutes', 'includeHours', 'includeDates', 'includeMonths', 'includeDays', 'showHints'];
  betweenSettings: string[] = ['includeMinutesBetween', 'includeHoursBetween', 'includeDatesBetween', 'includeMonthsBetween', 'includeDaysBetween'];
  @ViewChild('defaultCron') defaultCronInput: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.resultingCron = this.cronOptions.defaultCron;
  }

  setCron(cronObject: { cron: string }): void {
    this.hourlyCron = cronObject.cron;
  }

  updateSetting(event: MatCheckboxChange, setting: string): void {
    this.cronOptions[setting] = event.checked;
  }

  showCron(event): void {
    this.resultingCron = event.cronValue;
  }

  onActionTest(): void {

  }
}
