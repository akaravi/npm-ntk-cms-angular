import { Routes, RouterModule } from '@angular/router';
import { ApiTestComponent } from './apiTest.component';

const routes: Routes = [
  {
    path: '',
    component: ApiTestComponent,
  },
];
export const ApiTestRoutes = RouterModule.forChild(routes);
