import { Routes, RouterModule } from '@angular/router';
import { FileuploaderTestComponent } from './fileuploaderTest.component';

const routes: Routes = [
  {
    path: '',
    component: FileuploaderTestComponent,
  },
];

export const FileuploaderTestRoutes = RouterModule.forChild(routes);
