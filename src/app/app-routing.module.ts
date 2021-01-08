import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'filemanager',
    loadChildren: () => import('./pages/filemanagerTest/filemanagerTest.module').then((m) => m.FilemanagerTestModule),
  },
  {
    path: 'fileuploader',
    loadChildren: () =>
      import('./pages/fileuploaderTest/fileuploaderTest.module').then(
        (m) => m.FileuploaderTestModule
      ),
  },
  {
    path: 'apitest',
    loadChildren: () =>
      import('./pages/apiTest/apiTest.module').then((m) => m.ApiTestModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
