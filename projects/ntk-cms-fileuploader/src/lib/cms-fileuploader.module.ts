import { CmsFileUploaderComponent } from './cms-fileuploader.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FlowInjectionToken, NgxFlowModule } from '@flowjs/ngx-flow';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import Flow from '@flowjs/flow.js';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgxFlowModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    CmsFileUploaderComponent,

  ],
  exports: [

  ],
  providers: [
    {
      provide: FlowInjectionToken,
      useValue: Flow,
    },
  ]

})
export class FileManagerModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FileManagerModule,
  //     providers: [TranslateService]
  //   };
  // }
}
