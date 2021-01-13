import { Routes, RouterModule } from '@angular/router';
import { SmartLoaderTestComponent } from './smartLoaderTest.component';
import { MultiComponent } from './multi/multi.component';
import { CustomComponent } from './custom/custom.component';
import { AutostartComponent } from './autostart/autostart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SmartLoaderTestComponent,
  },
  { pathMatch: 'full', path: '', redirectTo: 'default' },
  { path: 'default', component: HomeComponent },
  { path: 'multi', component: MultiComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'autostart', component: AutostartComponent },
  { pathMatch: 'full', path: '**', redirectTo: 'default' },
];


export const SmartLoaderTestRoutes = RouterModule.forChild(routes);
