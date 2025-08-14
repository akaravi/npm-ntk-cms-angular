import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
  },
  {
    path: 'filemanagerTest',
    loadComponent: () => import('./pages/filemanagerTest/filemanagerTest.component').then((m) => m.FileManagerTestComponent),
  },
  {
    path: 'fileuploaderTest',
    loadComponent: () => import('./pages/fileuploaderTest/fileuploaderTest.component').then((m) => m.FileUploaderTestComponent),
  },
  {
    path: 'smartLoaderTest',
    loadComponent: () => import('./pages/smartLoaderTest/smartLoaderTest.component').then((m) => m.SmartLoaderTestComponent),
  },
  {
    path: 'smartModalTest',
    loadComponent: () => import('./pages/smartModalTest/smartModalTest.component').then((m) => m.SmartModalTestComponent),
  },
  {
    path: 'cronEditTest',
    loadComponent: () => import('./pages/cron-editor-test/cron-editor-test.component').then((m) => m.CronEditorTestComponent),
  },
  {
    path: 'ColorPicker',
    loadComponent: () => import('./pages/color-picker-test/color-picker-test.component').then((m) => m.ColorPickerTestComponent),
  },
  {
    path: 'IconPicker',
    loadComponent: () => import('./pages/icon-picker-test/icon-picker-test.component').then((m) => m.IconPickerTestComponent),
  },
  {
    path: 'apiTest',
    loadComponent: () => import('./pages/apiTest/apiTest.component').then((m) => m.ApiTestComponent),
  },
];
