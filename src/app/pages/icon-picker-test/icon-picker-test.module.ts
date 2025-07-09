import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { IconPickerModule } from 'ngx-ntk-icon-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDialogComponent} from './modal/modal.dialog';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconPickerTestComponent } from './icon-picker-test.component';

@NgModule({
  declarations: [
    IconPickerTestComponent,
    ModalDialogComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule,
    IconPickerModule
  ],
  providers: [],
  bootstrap: [IconPickerTestComponent]
})
export class IconPickerTestModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
