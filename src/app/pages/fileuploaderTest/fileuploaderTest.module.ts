import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploaderTestComponent } from './fileuploaderTest.component';
import { FileuploaderTestRoutes } from './fileuploaderTest.routing';

@NgModule({
  imports: [
    CommonModule,
    FileuploaderTestRoutes
  ],
  declarations: [FileuploaderTestComponent]
})
export class FileuploaderTestModule { }
