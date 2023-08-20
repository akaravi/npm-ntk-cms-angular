import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatColorPickerComponent } from './mat-color-picker-test.component';
import { MatColorPickerRoutes } from './mat-color-picker-test.routing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from 'projects/ngx-ntk-mat-color-picker/src/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatColorPickerRoutes,
    FormsModule,
    TranslateModule.forRoot({ extend: true }),
    NgxMatColorPickerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  declarations: [MatColorPickerComponent],
})
export class MatColorPickerModule { }
