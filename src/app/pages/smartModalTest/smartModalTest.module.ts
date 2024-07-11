import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NtkSmartModalModule } from 'projects/ngx-ntk-smart-module/src/public-api';
import { AutostartComponent } from './autostart/autostart.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FeatureComponent } from './feature/feature.component';
import { SmartModalTestComponent } from './smartModalTest.component';
import { SmartModalTestRoutes } from './smartModalTest.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
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
