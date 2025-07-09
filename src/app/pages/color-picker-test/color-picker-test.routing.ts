import { Routes, RouterModule } from '@angular/router';
import { ColorPickerTestComponent } from './color-picker-test.component';

const routes: Routes = [
  {
    path: '',
    component: ColorPickerTestComponent,
  },
];

export const MatColorPickerRoutes = RouterModule.forChild(routes);
