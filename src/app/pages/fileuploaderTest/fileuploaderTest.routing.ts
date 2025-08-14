import { Routes, RouterModule } from '@angular/router';
import { FileUploaderTestComponent } from './fileuploaderTest.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploaderTestComponent,
  },
];

export const FileuploaderTestRoutes = RouterModule.forChild(routes);
