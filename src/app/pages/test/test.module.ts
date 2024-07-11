import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test.routing';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TestRoutingModule,

  ],
  declarations: [TestComponent]
})
export class TestModule { }
