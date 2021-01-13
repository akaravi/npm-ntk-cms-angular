import { Routes, RouterModule } from '@angular/router';
import { AutostartComponent } from './autostart/autostart.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FeatureComponent } from './feature/feature.component';
import { SmartModalTestComponent } from './smartModalTest.component';


const routes: Routes = [
  {
    path: '',
    component: SmartModalTestComponent,
  },
  { path: 'feature', component: FeatureComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'autostart', component: AutostartComponent }
];

export const SmartModalTestRoutes = RouterModule.forChild(routes);
