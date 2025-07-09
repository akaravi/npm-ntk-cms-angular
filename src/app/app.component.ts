import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'npm-ntk-cms-angular';
  items = [
    { title: 'test', link: 'test' },
    { title: 'api Test', link: 'apiTest' },
    { title: 'filemanager Test', link: 'filemanagerTest' },
    { title: 'fileuploader Test', link: 'fileuploaderTest' },
    { title: 'smartLoader Test', link: 'smartLoaderTest' },
    { title: 'smartModal Test', link: 'smartModalTest' },
    { title: 'Cron Edit Test', link: 'cronEditTest' },
    { title: 'Color Picker Test', link: 'ColorPicker' },
    { title: 'Icon Picker Test', link: 'IconPicker' },
  ];

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
