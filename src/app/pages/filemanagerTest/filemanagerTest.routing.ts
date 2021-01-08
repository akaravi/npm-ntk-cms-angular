import { Routes, RouterModule } from '@angular/router';
import { FileManagerTestComponent } from './filemanagerTest.component';

const routes: Routes = [
  {
    path: '',
    component: FileManagerTestComponent,
  },
];

export const FilemanagerTestRoutes = RouterModule.forChild(routes);
