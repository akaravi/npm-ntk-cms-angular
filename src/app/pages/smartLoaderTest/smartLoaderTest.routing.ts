import { RouterModule, Routes } from '@angular/router';
import { AutostartComponent } from './autostart/autostart.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { MultiComponent } from './multi/multi.component';
import { SmartLoaderTestComponent } from './smartLoaderTest.component';

const routes: Routes = [
  {
    path: '',
    component: SmartLoaderTestComponent,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'default', component: HomeComponent },
      { path: 'multi', component: MultiComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'autostart', component: AutostartComponent },
      { path: '**', redirectTo: 'default' },
    ],
  },
];

export const SmartLoaderTestRoutes = RouterModule.forChild(routes);
