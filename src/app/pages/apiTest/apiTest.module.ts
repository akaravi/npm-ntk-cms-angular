import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiTestComponent } from './apiTest.component';
import { ApiTestRoutes } from './apiTest.routing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreAuthService } from 'projects/ntk-cms-api/src/public-api';

@NgModule({
  imports: [CommonModule, ApiTestRoutes, HttpClientModule, FormsModule],
  declarations: [ApiTestComponent],
  providers: [CoreAuthService],
})
export class ApiTestModule { }
