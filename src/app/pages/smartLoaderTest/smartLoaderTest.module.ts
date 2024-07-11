import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NtkSmartLoaderModule } from 'projects/ngx-ntk-smart-module/src/public-api';
import { AutostartComponent } from './autostart/autostart.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { MultiComponent } from './multi/multi.component';
import { SmartLoaderTestComponent } from './smartLoaderTest.component';
import { SmartLoaderTestRoutes } from './smartLoaderTest.routing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    SmartLoaderTestRoutes,
    NtkSmartLoaderModule.forRoot()

  ],
  declarations: [SmartLoaderTestComponent,
    HomeComponent,
    MultiComponent,
    CustomComponent,
    AutostartComponent,
  ]
})
export class SmartLoaderTestModule { }
