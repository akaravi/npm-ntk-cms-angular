import { NgModule } from '@angular/core';
import { MaterialCronJobsComponent } from './material-cron-jobs.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { MatCronEditorComponent } from './mat-cron-editor/mat-cron-editor.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [MaterialCronJobsComponent, MatCronEditorComponent],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [MaterialCronJobsComponent, MatCronEditorComponent]
})
export class MaterialCronJobsModule { }
