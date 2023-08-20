import { Routes, RouterModule } from '@angular/router';
import { MatColorPickerComponent } from './mat-color-picker-test.component';

const routes: Routes = [
  {
    path: '',
    component: MatColorPickerComponent,
  },
];

export const MatColorPickerRoutes = RouterModule.forChild(routes);
