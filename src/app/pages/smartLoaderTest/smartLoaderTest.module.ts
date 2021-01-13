import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartLoaderTestComponent } from './smartLoaderTest.component';
import { SmartLoaderTestRoutes } from './smartLoaderTest.routing';
import { CustomComponent } from './custom/custom.component';
import { MultiComponent } from './multi/multi.component';
import { AutostartComponent } from './autostart/autostart.component';
import { NtkSmartLoaderModule } from 'projects/ngx-ntk-smart-module/src/public-api';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
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
