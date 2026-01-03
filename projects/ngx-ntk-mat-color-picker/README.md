# NGX NTK Material Color Picker

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20%20%7C%2021-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![npm](https://img.shields.io/npm/v/ngx-ntk-mat-color-picker)

**Advanced Angular Material color picker component with multiple color formats, palette support, and customizable interface**

[Installation](#-installation) • [Usage](#-usage) • [API Reference](#-api-reference) • [Examples](#-examples)

</div>

---

**ngx-ntk-mat-color-picker** - Advanced Angular Material color picker component with multiple color formats, palette support, and customizable interface

## 📋 Overview

The NGX NTK Material Color Picker is a powerful Angular Material-based color picker component that provides a comprehensive color selection interface. It supports multiple color formats (RGB, HEX, RGBA), includes a color palette, canvas picker, and collection of predefined colors. Perfect for applications requiring advanced color selection capabilities with Material Design aesthetics.

## 🚀 Installation

```bash
npm install ngx-ntk-mat-color-picker
```

### Dependencies

This library requires the following peer dependencies:

```bash
npm install @angular/material @angular/forms @angular/cdk
```

## 📦 Features

### Core Features

- **Multiple Color Formats** - RGB, HEX, HEX3, HEX4, HEX6, HEX8, RGBA
- **Color Palette** - Visual color palette for quick selection
- **Color Canvas** - Interactive canvas for precise color picking
- **Color Collection** - Predefined color collections
- **Color Toggle** - Toggle component for color selection
- **Material Design** - Native Angular Material integration
- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - ARIA support and keyboard navigation

### Advanced Features

- **Custom Color Formats** - Extensible color format support
- **Color Validation** - Built-in color validation
- **Color Conversion** - Automatic format conversion
- **Overlay Positioning** - Configurable popup positioning
- **Scroll Strategy** - Customizable scroll behavior
- **Touch UI Support** - Touch-friendly interface
- **Theme Integration** - Material theme compatibility

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { NgxMatColorPickerModule } from "ngx-ntk-mat-color-picker";

@NgModule({
  imports: [NgxMatColorPickerModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<mat-form-field>
  <mat-label>Choose a color</mat-label>
  <input matInput [ngxMatColorPicker]="picker" placeholder="Select color" />
  <mat-icon matSuffix [ngxMatColorpickerToggleIcon]="picker"></mat-icon>
  <ngx-mat-color-picker #picker></ngx-mat-color-picker>
</mat-form-field>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { Color, ColorInputFormat } from "ngx-ntk-mat-color-picker";

@Component({
  selector: "app-color-selector",
  template: `
    <mat-form-field>
      <mat-label>Advanced Color Picker</mat-label>
      <input matInput [ngxMatColorPicker]="picker" [value]="selectedColor" [format]="'hex'" [disabled]="false" [touchUi]="false" placeholder="Choose a color" (colorChange)="onColorChange($event)" />
      <mat-icon matSuffix [ngxMatColorpickerToggleIcon]="picker"></mat-icon>
      <ngx-mat-color-picker #picker [format]="'hex'" [touchUi]="false" [disabled]="false" (colorChange)="onColorChange($event)" (opened)="onPickerOpened()" (closed)="onPickerClosed()"> </ngx-mat-color-picker>
    </mat-form-field>
  `,
})
export class ColorSelectorComponent {
  selectedColor: string = "#ff5722";

  onColorChange(color: Color): void {
    console.log("Color changed:", color.toString("hex"));
    this.selectedColor = color.toString("hex");
  }

  onPickerOpened(): void {
    console.log("Color picker opened");
  }

  onPickerClosed(): void {
    console.log("Color picker closed");
  }
}
```

## 📚 API Reference

### Input Properties

| Property      | Type             | Default | Description                     |
| ------------- | ---------------- | ------- | ------------------------------- |
| `format`      | ColorInputFormat | 'hex'   | Color format for input/output   |
| `touchUi`     | boolean          | false   | Enable touch-friendly interface |
| `disabled`    | boolean          | false   | Disable color picker            |
| `value`       | string           | -       | Initial color value             |
| `placeholder` | string           | -       | Input placeholder text          |

### Output Events

| Event         | Type         | Description         |
| ------------- | ------------ | ------------------- |
| `colorChange` | EventEmitter | Color change event  |
| `opened`      | EventEmitter | Picker opened event |
| `closed`      | EventEmitter | Picker closed event |

### ColorInputFormat Types

```typescript
export type ColorInputFormat = "rgb" | "hex" | "hex6" | "hex3" | "hex4" | "hex8";
```

### Color Class

```typescript
export class Color {
  r: number; // Red component (0-255)
  g: number; // Green component (0-255)
  b: number; // Blue component (0-255)
  a: number; // Alpha component (0-1)
  roundA: number; // Rounded alpha value
  hex: string; // HEX representation
  rgba: string; // RGBA representation

  // Methods
  toHex(allow3Char?: boolean): string;
  toRgba(): string;
  toHexString(allow3Char?: boolean): string;
  toRgbString(): string;
  toHex8(allow4Char: boolean): string;
  toHex8String(allow4Char?: boolean): string;
  toString(format: ColorInputFormat): string;
}
```

## 🎨 Customization

### Custom Styling

```scss
// Custom color picker styles
.ngx-mat-color-picker {
  .mat-form-field {
    width: 100%;
  }

  .color-picker-toggle {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .color-picker-content {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;

    .color-palette {
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;

      .color-item {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s ease;

        &:hover {
          transform: scale(1.1);
          border-color: #333;
        }

        &.selected {
          border-color: #2196f3;
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.3);
        }
      }
    }

    .color-canvas {
      padding: 16px;

      .canvas-container {
        position: relative;
        width: 100%;
        height: 200px;
        border-radius: 8px;
        overflow: hidden;
        cursor: crosshair;
      }

      .color-slider {
        margin-top: 16px;
        height: 20px;
        border-radius: 10px;
        background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
        cursor: pointer;
      }
    }

    .color-inputs {
      padding: 16px;
      background-color: #f5f5f5;

      .input-group {
        display: flex;
        gap: 8px;
        margin-bottom: 8px;

        .mat-form-field {
          flex: 1;
        }

        .color-preview {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }
      }
    }
  }
}
```

### Custom Color Formats

```typescript
import { ColorAdapter } from "ngx-ntk-mat-color-picker";

// Custom color adapter
export class CustomColorAdapter extends ColorAdapter {
  parse(value: string): Color | null {
    // Custom parsing logic
    if (value.startsWith("custom:")) {
      const colorValue = value.replace("custom:", "");
      // Parse custom format
      return this.parseCustomFormat(colorValue);
    }
    return super.parse(value);
  }

  format(color: Color): string {
    // Custom formatting logic
    return `custom:${color.r},${color.g},${color.b},${color.a}`;
  }

  private parseCustomFormat(value: string): Color {
    const [r, g, b, a] = value.split(",").map(Number);
    return new Color(r, g, b, a);
  }
}
```

## 🌈 Color Components

### Color Palette Component

```html
<ngx-mat-color-palette [colors]="paletteColors" [selectedColor]="selectedColor" (colorSelected)="onColorSelected($event)"> </ngx-mat-color-palette>
```

```typescript
paletteColors = ["#ff5722", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722"];
```

### Color Canvas Component

```html
<ngx-mat-color-canvas [color]="selectedColor" (colorChange)="onCanvasColorChange($event)"> </ngx-mat-color-canvas>
```

### Color Collection Component

```html
<ngx-mat-color-collection [collections]="colorCollections" (colorSelected)="onCollectionColorSelected($event)"> </ngx-mat-color-collection>
```

```typescript
colorCollections = [
  {
    name: "Material Colors",
    colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7"],
  },
  {
    name: "Brand Colors",
    colors: ["#2196f3", "#4caf50", "#ff9800", "#f44336"],
  },
];
```

### Color Toggle Component

```html
<ngx-mat-color-toggle [color]="selectedColor" [disabled]="false" (colorChange)="onToggleColorChange($event)"> </ngx-mat-color-toggle>
```

## 🔒 Validation & Error Handling

### Color Validation

```typescript
// Custom color validation
validateColor(color: string): boolean {
  const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return colorRegex.test(color);
}

// Color range validation
validateColorRange(color: Color): boolean {
  return color.r >= 0 && color.r <= 255 &&
         color.g >= 0 && color.g <= 255 &&
         color.b >= 0 && color.b <= 255 &&
         color.a >= 0 && color.a <= 1;
}
```

### Error Handling

```typescript
@Component({
  template: `
    <mat-form-field>
      <input matInput [ngxMatColorPicker]="picker" [value]="colorValue" (colorChange)="onColorChange($event)" (error)="onColorError($event)" />
      <ngx-mat-color-picker #picker></ngx-mat-color-picker>
      <mat-error *ngIf="colorError">{{ colorError }}</mat-error>
    </mat-form-field>
  `,
})
export class ColorPickerWithValidation {
  colorValue: string = "#ff5722";
  colorError: string = "";

  onColorChange(color: Color): void {
    if (this.validateColor(color.toString("hex"))) {
      this.colorValue = color.toString("hex");
      this.colorError = "";
    } else {
      this.colorError = "Invalid color format";
    }
  }

  onColorError(error: any): void {
    console.error("Color picker error:", error);
    this.colorError = "Color picker error occurred";
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxMatColorPickerModule } from "ngx-ntk-mat-color-picker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("ColorPickerComponent", () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatColorPickerModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      declarations: [ColorPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit color change event", () => {
    const mockColor = new Color(255, 87, 34, 1);
    spyOn(component.colorChange, "emit");

    component.onColorChange(mockColor);

    expect(component.colorChange.emit).toHaveBeenCalledWith(mockColor);
  });

  it("should format color correctly", () => {
    const color = new Color(255, 87, 34, 1);
    expect(color.toString("hex")).toBe("#ff5722");
    expect(color.toString("rgb")).toBe("rgb(255, 87, 34)");
    expect(color.toString("rgba")).toBe("rgba(255, 87, 34, 1)");
  });
});
```

### Integration Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxMatColorPickerModule } from "ngx-ntk-mat-color-picker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("ColorPicker Integration", () => {
  let fixture: ComponentFixture<ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatColorPickerModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule],
      declarations: [ColorPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
  });

  it("should display color picker input", () => {
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector("input");
    expect(input).toBeTruthy();
  });

  it("should open color picker on toggle click", () => {
    fixture.detectChanges();

    const toggle = fixture.nativeElement.querySelector(".mat-icon");
    toggle.click();
    fixture.detectChanges();

    const pickerContent = fixture.nativeElement.querySelector(".ngx-mat-colorpicker-content");
    expect(pickerContent).toBeTruthy();
  });

  it("should update input value when color is selected", () => {
    fixture.componentInstance.selectedColor = "#ff5722";
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector("input");
    expect(input.value).toBe("#ff5722");
  });
});
```

## ⚡ Performance

### Optimization Tips

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: "app-color-picker",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  // Implement trackBy function for ngFor
  trackByColor(index: number, color: string): string {
    return color;
  }

  // Debounce color change events
  private colorChangeSubject = new Subject<Color>();

  ngOnInit(): void {
    this.colorChangeSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged((prev, curr) => prev.toString() === curr.toString())
      )
      .subscribe((color) => {
        this.handleColorChange(color);
      });
  }

  onColorChange(color: Color): void {
    this.colorChangeSubject.next(color);
  }
}
```

### Memory Management

```typescript
// Proper cleanup
ngOnDestroy(): void {
  this.colorChangeSubject.complete();
  this.destroy$.next();
  this.destroy$.complete();
}

// Lazy load color picker content
loadColorPickerContent(): void {
  if (!this.pickerContentLoaded) {
    this.loadPickerContentAsync().subscribe(() => {
      this.pickerContentLoaded = true;
    });
  }
}
```

## 📝 Examples

### Basic Color Picker

```typescript
@Component({
  selector: "app-basic-color-picker",
  template: `
    <mat-form-field>
      <mat-label>Choose a color</mat-label>
      <input matInput [ngxMatColorPicker]="picker" placeholder="Select color" />
      <mat-icon matSuffix [ngxMatColorpickerToggleIcon]="picker"></mat-icon>
      <ngx-mat-color-picker #picker></ngx-mat-color-picker>
    </mat-form-field>
  `,
})
export class BasicColorPickerComponent {
  selectedColor: string = "#ff5722";
}
```

### Advanced Color Picker with Custom Format

```typescript
@Component({
  selector: "app-advanced-color-picker",
  template: `
    <mat-form-field>
      <mat-label>Advanced Color Picker</mat-label>
      <input matInput [ngxMatColorPicker]="picker" [value]="selectedColor" [format]="'rgba'" placeholder="Choose a color with alpha" (colorChange)="onColorChange($event)" />
      <mat-icon matSuffix [ngxMatColorpickerToggleIcon]="picker"></mat-icon>
      <ngx-mat-color-picker #picker [format]="'rgba'" [touchUi]="false" (colorChange)="onColorChange($event)"> </ngx-mat-color-picker>
    </mat-form-field>

    <div class="color-preview" [style.background-color]="selectedColor">Selected Color: {{ selectedColor }}</div>
  `,
  styles: [
    `
      .color-preview {
        width: 100px;
        height: 100px;
        border-radius: 8px;
        border: 2px solid #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        font-size: 12px;
        text-align: center;
        margin-top: 16px;
      }
    `,
  ],
})
export class AdvancedColorPickerComponent {
  selectedColor: string = "rgba(255, 87, 34, 1)";

  onColorChange(color: Color): void {
    this.selectedColor = color.toString("rgba");
    console.log("Color changed to:", this.selectedColor);
  }
}
```

### Color Picker with Validation

```typescript
@Component({
  selector: "app-validated-color-picker",
  template: `
    <mat-form-field>
      <mat-label>Validated Color Picker</mat-label>
      <input matInput [ngxMatColorPicker]="picker" [value]="selectedColor" [formControl]="colorControl" placeholder="Choose a valid color" />
      <mat-icon matSuffix [ngxMatColorpickerToggleIcon]="picker"></mat-icon>
      <ngx-mat-color-picker #picker></ngx-mat-color-picker>
      <mat-error *ngIf="colorControl.hasError('invalidColor')"> Please select a valid color </mat-error>
    </mat-form-field>
  `,
})
export class ValidatedColorPickerComponent {
  selectedColor: string = "#ff5722";
  colorControl = new FormControl("", [this.colorValidator()]);

  colorValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const color = control.value;
      if (!color) return null;

      const isValid = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
      return isValid ? null : { invalidColor: true };
    };
  }
}
```

## 🔄 Version History

### v20.25.3

- Initial release with core functionality
- Multiple color format support
- Material Design integration
- Color palette and canvas components
- Touch UI support
- Accessibility features

### v20.25.2

- Bug fixes and performance improvements
- Enhanced color validation
- Improved accessibility features
- Better mobile responsiveness

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact: [ntk.ir](https://ntk.ir)

## 🆘 Support

For support and questions:

- 📝 **Create an issue** on [GitHub](https://github.com/akaravi/npm-ntk-cms-angular/issues)
- 📚 **Check documentation** - See [main README.md](../../README.md)
- 💬 **Contact** - [ntk.ir](https://ntk.ir)

## 📦 npm Package

Install from npm:

```bash
npm install ngx-ntk-mat-color-picker
npm install @angular/material @angular/forms @angular/cdk
```

**Package:** [npmjs.com/package/ngx-ntk-mat-color-picker](https://www.npmjs.com/package/ngx-ntk-mat-color-picker)

## 🔗 Related Libraries

This library is part of the **NTK CMS Angular Libraries** collection:

- [ntk-cms-api](../../README.md#1-ntk-cms-api-v20261) - API services and models
- [ntk-cms-filemanager](../../README.md#2-ntk-cms-filemanager-v20262) - File management system
- [ngx-ntk-icon-picker](../../README.md#6-ngx-ntk-icon-picker-v20261) - Icon selection component
- [ngx-ntk-file-picker](../../README.md#5-ngx-ntk-file-picker-v20262) - Advanced file picker
- [ngx-ntk-cron-editor](../../README.md#4-ngx-ntk-cron-editor-v20262) - Cron expression editor
- [ngx-ntk-query-builder](../../README.md#8-ngx-ntk-query-builder-v20262) - Visual query builder
- [ngx-ntk-smart-module](../../README.md#9-ngx-ntk-smart-module-v20262) - Modal and loader system

For more information, see the [main project README](../../README.md).

---

<div align="center">

**Made with ❤️ by [NTK Team](https://ntk.ir)**

[⭐ Star us on GitHub](https://github.com/akaravi/npm-ntk-cms-angular) • [📦 View on npm](https://www.npmjs.com/package/ngx-ntk-mat-color-picker)

</div>
