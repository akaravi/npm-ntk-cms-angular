import { Component } from '@angular/core';

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
  ];
}
