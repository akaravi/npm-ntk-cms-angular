import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'filemanagerTest',
    loadChildren: () => import('./pages/filemanagerTest/filemanagerTest.module').then((m) => m.FilemanagerTestModule),
  },
  {
    path: 'fileuploaderTest',
    loadChildren: () =>      import('./pages/fileuploaderTest/fileuploaderTest.module').then((m) => m.FileuploaderTestModule ),
  },
  {
    path: 'apiTest',
    loadChildren: () =>
      import('./pages/apiTest/apiTest.module').then((m) => m.ApiTestModule),
  },
  {
    path: 'smartLoaderTest',
    loadChildren: () =>
      import('./pages/smartLoaderTest/smartLoaderTest.module').then((m) => m.SmartLoaderTestModule),
  },
  {
    path: 'smartModalTest',
    loadChildren: () =>
      import('./pages/smartModalTest/smartModalTest.module').then((m) => m.SmartModalTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
