import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BASIC_COLORS, stringInputToObject } from '../../helpers';
import { Color } from '../../models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ngx-ntk-mat-color-collection',
  templateUrl: './color-collection.component.html',
  styleUrls: ['./color-collection.component.scss'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ngx-ntk-mat-color-collection'
  }
})
export class NgxMatColorCollectionComponent implements OnInit {

  @Output() colorChanged: EventEmitter<Color> = new EventEmitter<Color>();

  @Input()
  set color(c: Color) {
    if (c) {
      if (typeof c === 'string')
        this.selectedColor = c;
      else
        this.selectedColor = c.toHexString();
    }
  }

  selectedColor: string;

  colors1: string[] = BASIC_COLORS.slice(0, 8);
  colors2: string[] = BASIC_COLORS.slice(8, 16);

  constructor() { }

  ngOnInit() {
  }

  select(hex: string) {
    this.selectedColor = hex;
    const { r, g, b, a } = stringInputToObject(hex);
    this.colorChanged.emit(new Color(r, g, b, a));
  }

}




