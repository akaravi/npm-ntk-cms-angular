import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
