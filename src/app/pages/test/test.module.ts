import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule } from './test.routing';


@NgModule({
  imports: [
    TestRoutingModule,
    CommonModule,
  ],
  declarations: [TestComponent]
})
export class TestModule { }
