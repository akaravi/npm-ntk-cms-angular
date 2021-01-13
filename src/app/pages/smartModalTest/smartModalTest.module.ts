import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartModalTestComponent } from './smartModalTest.component';
import { SmartModalTestRoutes } from './smartModalTest.routing';
import { AutostartComponent } from './autostart/autostart.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NtkSmartModalModule } from 'projects/ngx-ntk-smart-module/src/public-api';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  imports: [
    CommonModule,
    SmartModalTestRoutes,
    NtkSmartModalModule.forRoot()
  ],
  declarations: [SmartModalTestComponent,
    BootstrapComponent,
    AutostartComponent,
    FeatureComponent
  ]
})
export class SmartModalTestModule { }
