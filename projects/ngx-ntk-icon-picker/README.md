# NGX NTK Icon Picker

**ngx-ntk-icon-picker** - Advanced Angular icon picker component with support for multiple icon libraries including FontAwesome, Material Icons, and PrimeIcons

## 📋 Overview

The NGX NTK Icon Picker is a powerful Angular component for selecting icons from multiple popular icon libraries. It provides a user-friendly interface with search functionality, customizable styling, and support for FontAwesome (v4, v5, v6), Material Icons, and PrimeIcons. Perfect for applications requiring icon selection capabilities.

## 🚀 Installation

```bash
npm install ngx-ntk-icon-picker
```

### Dependencies

This library requires the following peer dependencies:

```bash
npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons primeicons
```

## 📦 Features

### Core Features

- **Multi-Icon Library Support** - FontAwesome v4, v5, v6, Material Icons, PrimeIcons
- **Search Functionality** - Real-time icon search and filtering
- **Customizable Interface** - Flexible styling and positioning options
- **Icon Preview** - Visual preview of selected icons
- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - ARIA support and keyboard navigation

### Advanced Features

- **Custom Icon Packs** - Extensible architecture for custom icon libraries
- **Positioning Options** - Configurable popup positioning
- **Size Customization** - Adjustable icon and container sizes
- **Fallback Icons** - Default icon when none is selected
- **Search Filter Persistence** - Option to maintain search state
- **Template Customization** - Custom templates for icon display

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { IconPickerModule } from "ngx-ntk-icon-picker";

@NgModule({
  imports: [IconPickerModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<icon-picker [(icon)]="selectedIcon" [ipIconPack]="['fa', 'fa5', 'fa6']" [ipPlaceHolder]="'Select an icon'" (iconSelected)="onIconSelected($event)"> </icon-picker>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { Icon, IconType } from "ngx-ntk-icon-picker";

@Component({
  selector: "app-icon-selector",
  template: ` <icon-picker [(icon)]="selectedIcon" [ipIconPack]="['fa', 'fa5', 'fa6', 'mat', 'pi']" [ipPosition]="'bottom'" [ipHeight]="400" [ipMaxHeight]="500" [ipWidth]="350" [ipIconSize]="20" [ipIconVerticalPadding]="8" [ipIconHorizontalPadding]="8" [ipPlaceHolder]="'Choose an icon'" [ipFallbackIcon]="'fa fa-star'" [ipKeepSearchFilter]="true" [ipButtonStyleClass]="'btn btn-primary'" [ipInputSearchStyleClass]="'form-control'" [ipDivSearchStyleClass]="'search-container'" (iconSelected)="onIconSelected($event)" (iconPickerOpen)="onIconPickerOpen()" (iconPickerClose)="onIconPickerClose()"> </icon-picker> `,
})
export class IconSelectorComponent {
  selectedIcon: string = "fa fa-home";

  onIconSelected(icon: Icon): void {
    console.log("Icon selected:", icon);
    // Handle icon selection
  }

  onIconPickerOpen(): void {
    console.log("Icon picker opened");
  }

  onIconPickerClose(): void {
    console.log("Icon picker closed");
  }
}
```

## 📚 API Reference

### Input Properties

| Property                  | Type     | Default          | Description                                       |
| ------------------------- | -------- | ---------------- | ------------------------------------------------- |
| `icon`                    | string   | -                | Selected icon value (two-way binding)             |
| `ipIconPack`              | string[] | ['fa']           | Icon packs to include                             |
| `ipPosition`              | string   | 'bottom'         | Popup position ('top', 'bottom', 'left', 'right') |
| `ipHeight`                | number   | 300              | Popup height in pixels                            |
| `ipMaxHeight`             | number   | 400              | Maximum popup height in pixels                    |
| `ipWidth`                 | number   | 250              | Popup width in pixels                             |
| `ipIconSize`              | number   | 16               | Icon size in pixels                               |
| `ipIconVerticalPadding`   | number   | 4                | Vertical padding around icons                     |
| `ipIconHorizontalPadding` | number   | 4                | Horizontal padding around icons                   |
| `ipPlaceHolder`           | string   | 'Select an icon' | Placeholder text                                  |
| `ipFallbackIcon`          | string   | -                | Fallback icon when none selected                  |
| `ipKeepSearchFilter`      | boolean  | false            | Keep search filter when reopening                 |
| `ipButtonStyleClass`      | string   | -                | CSS class for the button                          |
| `ipInputSearchStyleClass` | string   | -                | CSS class for search input                        |
| `ipDivSearchStyleClass`   | string   | -                | CSS class for search container                    |
| `ipUseRootViewContainer`  | boolean  | false            | Use root view container for popup                 |

### Output Events

| Event             | Type         | Description              |
| ----------------- | ------------ | ------------------------ |
| `iconSelected`    | EventEmitter | Icon selection event     |
| `iconPickerOpen`  | EventEmitter | Icon picker opened event |
| `iconPickerClose` | EventEmitter | Icon picker closed event |

### Icon Interface

```typescript
export class Icon {
  name: string; // Icon name
  id: string; // Unique identifier
  filter?: string[]; // Search filters
  aliases?: string[]; // Alternative names
  type?: IconType; // Icon library type
  iconName?: IconName; // FontAwesome icon name
  prefix?: string; // Icon prefix
}

export enum IconType {
  FontAwesome, // FontAwesome v4
  FontAwesome5 = 2, // FontAwesome v5
  Material, // Material Icons
  FontAwesome6, // FontAwesome v6
  PrimeIcons, // PrimeIcons
}
```

## 🎨 Customization

### Custom Styling

```scss
// Custom icon picker styles
.icon-picker {
  .icon-picker-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: #2196f3;
      background-color: #f5f5f5;
    }

    .selected-icon {
      font-size: 16px;
      color: #333;
    }

    .placeholder {
      color: #999;
      font-style: italic;
    }
  }

  .icon-picker-popup {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    overflow: hidden;

    .search-container {
      padding: 12px;
      border-bottom: 1px solid #eee;

      .search-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;

        &:focus {
          outline: none;
          border-color: #2196f3;
          box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
        }
      }
    }

    .icons-container {
      max-height: 300px;
      overflow-y: auto;
      padding: 8px;

      .icon-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        margin: 2px;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          border-color: #2196f3;
          background-color: #f0f8ff;
        }

        &.selected {
          border-color: #2196f3;
          background-color: #e3f2fd;
        }

        i {
          font-size: 16px;
          color: #333;
        }
      }
    }
  }
}
```

### Custom Icon Pack

```typescript
import { Injectable } from "@angular/core";
import { Icon, IconType } from "ngx-ntk-icon-picker";
import { IconsPack } from "ngx-ntk-icon-picker";

@Injectable()
export class CustomIconsPack implements IconsPack {
  getIcons(): Icon[] {
    return [
      {
        name: "custom-icon-1",
        id: "custom-1",
        filter: ["custom", "icon", "one"],
        type: IconType.FontAwesome,
        prefix: "custom",
      },
      {
        name: "custom-icon-2",
        id: "custom-2",
        filter: ["custom", "icon", "two"],
        type: IconType.FontAwesome,
        prefix: "custom",
      },
    ];
  }
}
```

## 🌐 Icon Libraries Support

### FontAwesome v4 (fa)

```typescript
// Include FontAwesome v4 icons
[ipIconPack] = "['fa']";

// Example icons
("fa fa-home");
("fa fa-user");
("fa fa-cog");
("fa fa-heart");
("fa fa-star");
```

### FontAwesome v5 (fa5)

```typescript
// Include FontAwesome v5 icons
[ipIconPack] = "['fa5']";

// Example icons
("fas fa-home");
("far fa-user");
("fab fa-angular");
("fal fa-cog");
("fad fa-heart");
```

### FontAwesome v6 (fa6)

```typescript
// Include FontAwesome v6 icons
[ipIconPack] = "['fa6']";

// Example icons
("fa-solid fa-home");
("fa-regular fa-user");
("fa-brands fa-angular");
("fa-light fa-cog");
("fa-duotone fa-heart");
```

### Material Icons (mat)

```typescript
// Include Material Icons
[ipIconPack] = "['mat']";

// Example icons
("mat home");
("mat person");
("mat settings");
("mat favorite");
("mat star");
```

### PrimeIcons (pi)

```typescript
// Include PrimeIcons
[ipIconPack] = "['pi']";

// Example icons
("pi pi-home");
("pi pi-user");
("pi pi-cog");
("pi pi-heart");
("pi pi-star");
```

### Multiple Icon Packs

```typescript
// Include all icon packs
[ipIconPack] = // Or use 'all' shorthand
"['fa', 'fa5', 'fa6', 'mat', 'pi']"[ipIconPack] = "['all']";
```

## 🔒 Security & Validation

### Icon Validation

```typescript
// Custom icon validation
validateIcon(icon: string): boolean {
  // Check if icon exists in selected packs
  const validIcons = this.getValidIcons();
  return validIcons.some(validIcon => validIcon.name === icon);
}

// Sanitize icon input
sanitizeIcon(icon: string): string {
  // Remove potentially dangerous characters
  return icon.replace(/[<>\"'&]/g, '');
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IconPickerModule } from "ngx-ntk-icon-picker";

describe("IconSelectorComponent", () => {
  let component: IconSelectorComponent;
  let fixture: ComponentFixture<IconSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPickerModule],
      declarations: [IconSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit iconSelected event", () => {
    const mockIcon = { name: "fa fa-home", id: "home", type: IconType.FontAwesome };
    spyOn(component.iconSelected, "emit");

    component.onIconSelected(mockIcon);

    expect(component.iconSelected.emit).toHaveBeenCalledWith(mockIcon);
  });

  it("should filter icons by search term", () => {
    component.search = "home";
    const filteredIcons = component.getFilteredIcons();

    expect(filteredIcons.every((icon) => icon.name.toLowerCase().includes("home") || icon.filter?.some((filter) => filter.toLowerCase().includes("home")))).toBe(true);
  });
});
```

### Integration Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IconPickerModule } from "ngx-ntk-icon-picker";

describe("IconPicker Integration", () => {
  let fixture: ComponentFixture<IconSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconPickerModule],
      declarations: [IconSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconSelectorComponent);
  });

  it("should display selected icon", () => {
    fixture.componentInstance.selectedIcon = "fa fa-home";
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector(".selected-icon");
    expect(iconElement).toBeTruthy();
    expect(iconElement.textContent).toContain("home");
  });

  it("should open popup on button click", () => {
    const button = fixture.nativeElement.querySelector(".icon-picker-button");
    button.click();
    fixture.detectChanges();

    const popup = fixture.nativeElement.querySelector(".icon-picker-popup");
    expect(popup).toBeTruthy();
  });

  it("should filter icons when searching", () => {
    // Open popup
    const button = fixture.nativeElement.querySelector(".icon-picker-button");
    button.click();
    fixture.detectChanges();

    // Enter search term
    const searchInput = fixture.nativeElement.querySelector(".search-input");
    searchInput.value = "home";
    searchInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Check filtered results
    const iconItems = fixture.nativeElement.querySelectorAll(".icon-item");
    expect(iconItems.length).toBeGreaterThan(0);
  });
});
```

## ⚡ Performance

### Optimization Tips

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: "app-icon-selector",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSelectorComponent {
  // Implement trackBy function for ngFor
  trackByIcon(index: number, icon: Icon): string {
    return icon.id;
  }

  // Debounce search input
  private searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((searchTerm) => {
      this.performSearch(searchTerm);
    });
  }

  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }
}
```

### Memory Management

```typescript
// Proper cleanup
ngOnDestroy(): void {
  this.searchSubject.complete();
  this.destroy$.next();
  this.destroy$.complete();
}

// Lazy load icon packs
loadIconPack(packName: string): void {
  if (!this.loadedPacks.has(packName)) {
    this.loadIconPackAsync(packName).subscribe(icons => {
      this.loadedPacks.set(packName, icons);
    });
  }
}
```

## 📝 Examples

### Basic Icon Selector

```typescript
@Component({
  selector: "app-basic-icon-selector",
  template: `
    <div class="icon-selector">
      <label>Choose an icon:</label>
      <icon-picker [(icon)]="selectedIcon" [ipIconPack]="['fa']" [ipPlaceHolder]="'Select an icon'" (iconSelected)="onIconSelected($event)"> </icon-picker>
    </div>
  `,
})
export class BasicIconSelectorComponent {
  selectedIcon: string = "fa fa-star";

  onIconSelected(icon: Icon): void {
    console.log("Selected icon:", icon.name);
  }
}
```

### Advanced Icon Selector with Custom Styling

```typescript
@Component({
  selector: "app-advanced-icon-selector",
  template: `
    <div class="advanced-icon-selector">
      <icon-picker [(icon)]="selectedIcon" [ipIconPack]="['fa', 'fa5', 'fa6', 'mat', 'pi']" [ipPosition]="'bottom'" [ipHeight]="400" [ipWidth]="350" [ipIconSize]="24" [ipIconVerticalPadding]="8" [ipIconHorizontalPadding]="8" [ipPlaceHolder]="'Choose an icon for your project'" [ipFallbackIcon]="'fa fa-question-circle'" [ipKeepSearchFilter]="true" [ipButtonStyleClass]="'custom-icon-button'" [ipInputSearchStyleClass]="'custom-search-input'" [ipDivSearchStyleClass]="'custom-search-container'" (iconSelected)="onIconSelected($event)"> </icon-picker>
    </div>
  `,
  styles: [
    `
      .advanced-icon-selector {
        .custom-icon-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            border-color: #667eea;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
        }

        .custom-search-input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          background-color: #f8f9fa;

          &:focus {
            outline: none;
            border-color: #667eea;
            background-color: white;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }
        }

        .custom-search-container {
          background-color: #f8f9fa;
          border-bottom: 2px solid #e0e0e0;
        }
      }
    `,
  ],
})
export class AdvancedIconSelectorComponent {
  selectedIcon: string = "fa fa-rocket";

  onIconSelected(icon: Icon): void {
    console.log("Advanced icon selected:", icon);
    // Handle icon selection with additional logic
  }
}
```

### Icon Selector with Validation

```typescript
@Component({
  selector: "app-validated-icon-selector",
  template: `
    <div class="validated-icon-selector">
      <icon-picker [(icon)]="selectedIcon" [ipIconPack]="['fa', 'fa5']" [ipPlaceHolder]="'Select a valid icon'" [ipFallbackIcon]="'fa fa-exclamation-triangle'" (iconSelected)="validateAndSelectIcon($event)"> </icon-picker>

      <div *ngIf="validationError" class="validation-error">
        {{ validationError }}
      </div>
    </div>
  `,
})
export class ValidatedIconSelectorComponent {
  selectedIcon: string = "";
  validationError: string = "";

  validateAndSelectIcon(icon: Icon): void {
    // Custom validation logic
    if (this.isIconAllowed(icon)) {
      this.selectedIcon = icon.name;
      this.validationError = "";
    } else {
      this.validationError = "This icon is not allowed for your account type.";
    }
  }

  private isIconAllowed(icon: Icon): boolean {
    // Implement your validation logic
    const allowedIcons = ["fa fa-home", "fa fa-user", "fa fa-cog"];
    return allowedIcons.includes(icon.name);
  }
}
```

## 🔄 Version History

### v20.25.3

- Initial release with core functionality
- Multi-icon library support
- Search and filtering capabilities
- Customizable interface
- FontAwesome v4, v5, v6 integration
- Material Icons support
- PrimeIcons integration

### v20.25.2

- Bug fixes and performance improvements
- Enhanced search functionality
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

## 👨‍💻 Author

**Alireza Karavi**

- GitHub: [@akaravi](https://github.com/akaravi)
- Website: [ntk.ir](https://ntk.ir)

---

**Note**: This library is part of the NTK CMS Angular Libraries collection. For more information, see the main project README.
