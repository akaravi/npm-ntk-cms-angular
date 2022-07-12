import { Routes, RouterModule } from '@angular/router';
import { CronEditorTestComponent } from './cron-editor-test.component';

const routes: Routes = [
  {
    path: '',
    component: CronEditorTestComponent,
  },
];

export const CronEditorTestRoutes = RouterModule.forChild(routes);
