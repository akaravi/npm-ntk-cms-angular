import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CronEditorModule, defaultCronOptions } from 'ngx-ntk-cron-editor';

@Component({
  selector: 'app-cron-editor-test',
  templateUrl: './cron-editor-test.component.html',
  styleUrls: ['./cron-editor-test.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CronEditorModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CronEditorTestComponent {
  title = 'cron-editor-test works!';

  activeTab = 'default';
  cronExpression = '0 0 12 * * ?';
  isCronDisabled = false;
  cronOptions = {
    ...defaultCronOptions,
    use24HourTime: false,
    hideSeconds: false,
    removeSeconds: false,
    removeYears: false
  };

  cronForm = new FormGroup({
    cron: new FormControl('0 0 12 * * ?')
  });
}



