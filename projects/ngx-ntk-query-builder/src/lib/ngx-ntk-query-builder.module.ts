import { NgModule } from '@angular/core';
import { NgxQueryBuilderComponent } from './ngx-ntk-query-builder.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    NgxQueryBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxQueryBuilderComponent
  ]
})
export class NgxQueryBuilderModule { }
