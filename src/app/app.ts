import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CmsTranslateModule } from './i18n/cmsTranslation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, CmsTranslateModule],
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }
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
}
