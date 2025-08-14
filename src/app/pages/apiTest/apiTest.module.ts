import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestComponent } from './apiTest.component';

const routes: Routes = [
  { path: '', component: ApiTestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiTestComponent,
    RouterModule.forChild(routes)
  ]
})
export class ApiTestModule { }
