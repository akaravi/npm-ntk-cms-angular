import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CronEditorTranslateService } from 'projects/ngx-ntk-cron-editor/src/lib/services/cron-editor-translate.service';
import { CronOptionModel } from 'projects/ngx-ntk-cron-editor/src/public-api';


// import {en} from './translations/en';
// import {ru} from './translations/ru';
@Component({
  selector: 'app-root',
  templateUrl: './cron-editor-test.component.html',
  styleUrls: ['./cron-editor-test.component.scss'],
})
export class CronEditorTestComponent {

  // Hangfire 1.7+ compatible expression: '3 2 12 1/1 ?'
  // Quartz compatible expression: '4 3 2 12 1/1 ? *'
  public cronExpression = "0 12 1W 1/1 ?";
  public isCronDisabled = false;
  public cronOptions: CronOptionModel = {
    formInputClass: "form-control cron-editor-input",
    formSelectClass: "form-select cron-editor-select",
    formRadioClass: "cron-editor-radio",
    formCheckboxClass: "form-check-input cron-editor-checkbox",

    defaultTime: "10:00:00",
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: false,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true,
  };

  activeTab: "default" | "reactiveForm" | "ngModel" = "default";

  cronForm = new FormGroup({
    cron: new FormControl<string>(this.cronExpression),
  });
  constructor(private translate: TranslateService,
    private cronEditorTranslateService: CronEditorTranslateService) {
// translate.setTranslation('en', en);
// translate.setTranslation('ru', ru);
translate.use('ru');
cronEditorTranslateService.init({
existent: [
  {lang: 'fa', useExistent: 'fa'},
{lang: 'en', useExistent: 'en'},
{lang: 'ru', useExistent: 'ru'}
]
});
}
}
