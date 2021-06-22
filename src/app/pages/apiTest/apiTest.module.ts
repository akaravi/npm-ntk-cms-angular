import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTestComponent } from './apiTest.component';
import { ApiTestRoutes } from './apiTest.routing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreAuthService } from 'projects/ntk-cms-api/src/public-api';

@NgModule({
  imports: [CommonModule, ApiTestRoutes, HttpClientModule, FormsModule],
  declarations: [ApiTestComponent],
  providers: [CoreAuthService],
})
export class ApiTestModule { }
