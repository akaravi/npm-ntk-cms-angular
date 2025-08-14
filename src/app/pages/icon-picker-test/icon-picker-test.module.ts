import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IconPickerTestComponent } from './icon-picker-test.component';

const routes: Routes = [
  { path: '', component: IconPickerTestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconPickerTestComponent,
    RouterModule.forChild(routes)
  ]
})
export class IconPickerTestModule { }
