import { Component, EventEmitter, OnInit, Output, ViewEncapsulation, Input } from '@angular/core';
import { Color } from '../../models';
import { BASIC_COLORS, stringInputToObject } from '../../helpers';

@Component({
  selector: 'ngx-ntk-mat-color-collection',
  templateUrl: './color-collection.component.html',
  styleUrls: ['./color-collection.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ngx-ntk-mat-color-collection'
  }
})
export class NgxMatColorCollectionComponent implements OnInit {

  @Output() colorChanged: EventEmitter<Color> = new EventEmitter<Color>();

  @Input()
  set color(c: Color | string) {

    if (c) {
      if (typeof c == 'string' && c.indexOf('#') == 0) {
        this.selectedColor = c;
      }
      else if (typeof c === typeof Color) {
        this.selectedColor = (c as Color).toHexString();
      }
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
