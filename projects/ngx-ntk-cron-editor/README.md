# NGX NTK Cron Editor

**ngx-ntk-cron-editor** - Visual cron expression builder with time picker and multi-language support

## 📋 Overview

The NGX NTK Cron Editor is a comprehensive Angular component for creating and editing cron expressions. It provides an intuitive visual interface with time picker functionality, real-time validation, and multi-language support. Perfect for scheduling tasks, jobs, and automated processes.

## 🚀 Installation

```bash
npm install ngx-ntk-cron-editor
```

## 📦 Features

### Core Features

- **Visual Expression Builder** - Intuitive cron expression creation
- **Time Picker Component** - Hour and minute selection
- **Real-time Validation** - Instant validation feedback
- **Multi-language Support** - English, Persian, Russian
- **Customizable Options** - Flexible configuration
- **Expression Preview** - Human-readable preview
- **Next Run Calculation** - Shows next execution time

### Advanced Features

- **Multiple Cron Formats** - Standard and extended formats
- **Custom Validation Rules** - User-defined validation
- **Expression Import/Export** - Save and load expressions
- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - ARIA support and keyboard navigation
- **Theme Integration** - Customizable styling

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { NgxNtkCronEditorModule } from "ngx-ntk-cron-editor";

@NgModule({
  imports: [NgxNtkCronEditorModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<ngx-ntk-cron-editor [(cronExpression)]="cronExpression" [options]="cronOptions" [language]="'en'" (expressionChange)="onExpressionChange($event)"> </ngx-ntk-cron-editor>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { CronOptions } from "ngx-ntk-cron-editor";

export class CronEditorComponent {
  cronExpression = "0 0 12 * * ?"; // Daily at noon
  cronOptions: CronOptions = {
    includeYear: true,
    includeSeconds: true,
    includeMonth: true,
    includeDayOfWeek: true,
    includeDayOfMonth: true,
    includeHour: true,
    includeMinute: true,
    allowMultiple: {
      seconds: true,
      minutes: true,
      hours: true,
      daysOfMonth: true,
      months: true,
      daysOfWeek: true,
      years: true,
    },
    allowRange: {
      seconds: true,
      minutes: true,
      hours: true,
      daysOfMonth: true,
      months: true,
      daysOfWeek: true,
      years: true,
    },
    allowStep: {
      seconds: true,
      minutes: true,
      hours: true,
      daysOfMonth: true,
      months: true,
      daysOfWeek: true,
      years: true,
    },
  };

  onExpressionChange(expression: string): void {
    console.log("Cron expression changed:", expression);
    // Handle expression change
  }

  onValidationError(error: any): void {
    console.error("Validation error:", error);
    // Handle validation error
  }

  onNextRunCalculated(nextRun: Date): void {
    console.log("Next run:", nextRun);
    // Handle next run calculation
  }
}
```

## 📚 API Reference

### Input Properties

| Property         | Type        | Default        | Description                 |
| ---------------- | ----------- | -------------- | --------------------------- |
| `cronExpression` | string      | -              | Cron expression string      |
| `options`        | CronOptions | defaultOptions | Configuration options       |
| `language`       | string      | 'en'           | Interface language          |
| `disabled`       | boolean     | false          | Disable editor              |
| `readonly`       | boolean     | false          | Read-only mode              |
| `showPreview`    | boolean     | true           | Show human-readable preview |
| `showNextRun`    | boolean     | true           | Show next execution time    |

### Output Events

| Event               | Type         | Description                |
| ------------------- | ------------ | -------------------------- |
| `expressionChange`  | EventEmitter | Expression change event    |
| `validationError`   | EventEmitter | Validation error event     |
| `nextRunCalculated` | EventEmitter | Next run calculation event |
| `timePickerChange`  | EventEmitter | Time picker change event   |

### CronOptions Interface

```typescript
interface CronOptions {
  includeYear?: boolean;
  includeSeconds?: boolean;
  includeMonth?: boolean;
  includeDayOfWeek?: boolean;
  includeDayOfMonth?: boolean;
  includeHour?: boolean;
  includeMinute?: boolean;
  allowMultiple?: {
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
    daysOfMonth?: boolean;
    months?: boolean;
    daysOfWeek?: boolean;
    years?: boolean;
  };
  allowRange?: {
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
    daysOfMonth?: boolean;
    months?: boolean;
    daysOfWeek?: boolean;
    years?: boolean;
  };
  allowStep?: {
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
    daysOfMonth?: boolean;
    months?: boolean;
    daysOfWeek?: boolean;
    years?: boolean;
  };
}
```

## 🌐 Internationalization

The cron editor supports multiple languages:

### Supported Languages

- **English (en)** - Default language
- **Persian/Farsi (fa)** - فارسی
- **Russian (ru)** - Русский

### Translation Setup

```typescript
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/cron-editor/", ".json");
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class AppModule {}
```

### Translation Keys

```json
{
  "cron-editor": {
    "seconds": "Seconds",
    "minutes": "Minutes",
    "hours": "Hours",
    "dayOfMonth": "Day of Month",
    "month": "Month",
    "dayOfWeek": "Day of Week",
    "year": "Year",
    "every": "Every",
    "at": "At",
    "on": "On",
    "and": "And",
    "or": "Or",
    "between": "Between",
    "starting": "Starting",
    "increment": "Increment",
    "last": "Last",
    "first": "First",
    "second": "Second",
    "third": "Third",
    "fourth": "Fourth",
    "fifth": "Fifth",
    "weekday": "Weekday",
    "weekend": "Weekend",
    "nextRun": "Next Run",
    "expression": "Expression",
    "preview": "Preview",
    "validation": "Validation"
  }
}
```

## 🎨 Customization

### Custom Styling

```scss
// Custom cron editor styles
.ngx-ntk-cron-editor {
  .cron-tabs {
    background-color: #f5f5f5;
    border-radius: 4px;
    padding: 10px;

    .tab-button {
      padding: 8px 16px;
      margin: 0 4px;
      border: none;
      border-radius: 4px;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #e0e0e0;
      }

      &.active {
        background-color: #2196f3;
        color: white;
      }
    }
  }

  .cron-field {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fafafa;

    .field-label {
      font-weight: 500;
      color: #333;
      margin-bottom: 5px;
    }

    .field-controls {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .time-picker {
      display: flex;
      gap: 5px;
      align-items: center;

      select {
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
        background-color: white;
      }
    }
  }

  .expression-preview {
    margin-top: 15px;
    padding: 10px;
    background-color: #e3f2fd;
    border-radius: 4px;
    border-left: 4px solid #2196f3;

    .preview-text {
      font-family: monospace;
      color: #1976d2;
    }
  }

  .validation-error {
    color: #f44336;
    font-size: 12px;
    margin-top: 5px;
  }
}
```

### Custom Templates

```html
<ngx-ntk-cron-editor [config]="cronConfig">
  <!-- Custom field template -->
  <ng-template #fieldTemplate let-field let-value="value" let-onChange="onChange">
    <div class="custom-field">
      <label class="field-label">{{ field.label | translate }}</label>
      <div class="field-controls">
        <select [value]="value" (change)="onChange($event.target.value)">
          <option *ngFor="let option of field.options" [value]="option.value">{{ option.label | translate }}</option>
        </select>
      </div>
    </div>
  </ng-template>

  <!-- Custom preview template -->
  <ng-template #previewTemplate let-expression let-preview="preview">
    <div class="custom-preview">
      <h4>Expression Preview</h4>
      <div class="expression-display">
        <code>{{ expression }}</code>
      </div>
      <div class="human-readable"><strong>Human Readable:</strong> {{ preview }}</div>
    </div>
  </ng-template>
</ngx-ntk-cron-editor>
```

## 🔐 Validation

### Custom Validation Rules

```typescript
export class CronEditorComponent {
  customValidationRules = {
    maxDaysInMonth: 31,
    maxHours: 23,
    maxMinutes: 59,
    maxSeconds: 59,
    allowSpecificDays: ["MON", "TUE", "WED", "THU", "FRI"],
    businessHoursOnly: true,
    excludeWeekends: true,
  };

  validateExpression(expression: string): boolean {
    // Custom validation logic
    const parts = expression.split(" ");

    // Validate seconds
    if (parts[0] && !this.isValidSeconds(parts[0])) {
      return false;
    }

    // Validate minutes
    if (parts[1] && !this.isValidMinutes(parts[1])) {
      return false;
    }

    // Validate hours
    if (parts[2] && !this.isValidHours(parts[2])) {
      return false;
    }

    // Validate day of month
    if (parts[3] && !this.isValidDayOfMonth(parts[3])) {
      return false;
    }

    // Validate month
    if (parts[4] && !this.isValidMonth(parts[4])) {
      return false;
    }

    // Validate day of week
    if (parts[5] && !this.isValidDayOfWeek(parts[5])) {
      return false;
    }

    return true;
  }

  private isValidSeconds(seconds: string): boolean {
    const value = parseInt(seconds);
    return value >= 0 && value <= 59;
  }

  private isValidMinutes(minutes: string): boolean {
    const value = parseInt(minutes);
    return value >= 0 && value <= 59;
  }

  private isValidHours(hours: string): boolean {
    const value = parseInt(hours);
    return value >= 0 && value <= 23;
  }

  private isValidDayOfMonth(day: string): boolean {
    const value = parseInt(day);
    return value >= 1 && value <= 31;
  }

  private isValidMonth(month: string): boolean {
    const value = parseInt(month);
    return value >= 1 && value <= 12;
  }

  private isValidDayOfWeek(day: string): boolean {
    const value = parseInt(day);
    return value >= 1 && value <= 7;
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxNtkCronEditorModule } from "ngx-ntk-cron-editor";

describe("CronEditorComponent", () => {
  let component: CronEditorComponent;
  let fixture: ComponentFixture<CronEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNtkCronEditorModule],
      declarations: [CronEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CronEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize with default expression", () => {
    expect(component.cronExpression).toBe("0 0 12 * * ?");
  });

  it("should handle expression change", () => {
    const newExpression = "0 30 9 * * ?";
    spyOn(component.expressionChange, "emit");

    component.cronExpression = newExpression;
    component.onExpressionChange(newExpression);

    expect(component.expressionChange.emit).toHaveBeenCalledWith(newExpression);
  });

  it("should validate cron expression correctly", () => {
    const validExpression = "0 0 12 * * ?";
    const invalidExpression = "60 0 12 * * ?";

    expect(component.validateExpression(validExpression)).toBe(true);
    expect(component.validateExpression(invalidExpression)).toBe(false);
  });

  it("should calculate next run time", () => {
    const expression = "0 0 12 * * ?";
    const nextRun = component.calculateNextRun(expression);

    expect(nextRun).toBeInstanceOf(Date);
    expect(nextRun.getHours()).toBe(12);
    expect(nextRun.getMinutes()).toBe(0);
    expect(nextRun.getSeconds()).toBe(0);
  });
});
```

## 📊 Performance

### Optimization Tips

1. **Lazy Loading**: Load cron editor on demand
2. **Debounced Updates**: Debounce expression change events
3. **Caching**: Cache validation results
4. **Virtual Scrolling**: Use for large option lists
5. **Memoization**: Cache next run calculations

### Memory Management

```typescript
export class CronEditorComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private validationCache = new Map<string, boolean>();

  ngOnInit(): void {
    // Subscribe to expression changes with debounce
    this.expressionChange$.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe((expression) => {
      this.validateExpression(expression);
    });
  }

  validateExpression(expression: string): boolean {
    // Check cache first
    if (this.validationCache.has(expression)) {
      return this.validationCache.get(expression)!;
    }

    // Perform validation
    const isValid = this.performValidation(expression);

    // Cache result
    this.validationCache.set(expression, isValid);

    return isValid;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.validationCache.clear();
  }
}
```

## 🔄 Version History

### v18.26.4

- Initial release with core functionality
- Visual expression builder
- Time picker component
- Multi-language support
- Real-time validation

### v18.26.3

- Bug fixes and performance improvements
- Enhanced validation rules
- Improved UI/UX
- Better accessibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This library is licensed under the ISC License.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact: [ntk.ir](https://ntk.ir)
- Documentation: Check the main README.md

---

**Note**: This library is part of the NTK CMS Angular Libraries collection. For more information, see the main project README.
