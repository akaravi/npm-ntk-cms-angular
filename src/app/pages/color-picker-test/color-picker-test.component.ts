import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';
import { NgxMatColorPickerModule } from 'ngx-ntk-mat-color-picker';

@Component({
  selector: 'app-color-picker-test',
  templateUrl: './color-picker-test.component.html',
  styleUrls: ['./color-picker-test.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    NgxMatColorPickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColorPickerTestComponent {
  title = 'color-picker-test works!';

  colorCtr = new FormControl();
  touchUi = false;
  color: ThemePalette = 'primary';
  disabled = false;
  options = [
    { value: true, label: 'true' },
    { value: false, label: 'false' }
  ];
  listColors: ThemePalette[] = ['primary', 'accent', 'warn'];
  code3 = '';
  code6 = '';
  code7 = '';

  onDisabledChanged(value: boolean) {
    this.disabled = value;
  }
}



