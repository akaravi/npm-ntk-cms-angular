# NGX NTK Query Builder

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20%20%7C%2021-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![npm](https://img.shields.io/npm/v/ngx-ntk-query-builder)

**Advanced Angular query builder component for creating complex database queries with visual interface and multi-language support**

[Installation](#-installation) • [Usage](#-usage) • [API Reference](#-api-reference) • [Examples](#-examples)

</div>

---

**ngx-ntk-query-builder** - Advanced Angular query builder component for creating complex database queries with visual interface and multi-language support

## 📋 Overview

The NGX NTK Query Builder is a powerful Angular component for building complex database queries through an intuitive visual interface. It supports multiple data types, operators, nested conditions, and provides a flexible architecture for creating dynamic queries. Perfect for applications requiring advanced search and filtering capabilities.

## 🚀 Installation

```bash
npm install ngx-ntk-query-builder
```

### Dependencies

This library requires the following peer dependencies:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader
```

## 📦 Features

### Core Features

- **Visual Query Builder** - Intuitive drag-and-drop interface
- **Multiple Data Types** - String, Integer, Double, Date, Time, Boolean, Select
- **Advanced Operators** - Equals, Contains, Greater/Less than, Null checks, etc.
- **Nested Conditions** - Support for complex AND/OR logic
- **Multi-language Support** - Internationalization ready
- **Custom Field Types** - Extensible field type system
- **Real-time Validation** - Built-in query validation

### Advanced Features

- **Custom Operators** - Extensible operator system
- **Field Settings** - Configurable field behavior
- **Query Export** - Export queries in various formats
- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - ARIA support and keyboard navigation
- **Template Customization** - Custom templates for fields

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { NgxNtkQueryBuilderModule } from "ngx-ntk-query-builder";

@NgModule({
  imports: [NgxNtkQueryBuilderModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<ngx-ntk-query-builder [fieldMap]="fieldMap" [(data)]="queryData" (queryChange)="onQueryChange($event)"> </ngx-ntk-query-builder>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { QueryBuilderFieldMap, QueryRuleSet } from "ngx-ntk-query-builder";

@Component({
  selector: "app-query-builder",
  template: ` <ngx-ntk-query-builder [fieldMap]="fieldMap" [settings]="querySettings" [(data)]="queryData" [disabled]="false" (queryChange)="onQueryChange($event)" (ruleAdded)="onRuleAdded($event)" (ruleRemoved)="onRuleRemoved($event)"> </ngx-ntk-query-builder> `,
})
export class QueryBuilderComponent {
  fieldMap: QueryBuilderFieldMap = {
    name: {
      name: "Name",
      type: "string",
      settings: {
        nullableOperators: true,
        emptyOperators: true,
      },
    },
    age: {
      name: "Age",
      type: "integer",
    },
    email: {
      name: "Email",
      type: "string",
    },
    status: {
      name: "Status",
      type: "select",
      options: [
        { name: "Active", value: "active" },
        { name: "Inactive", value: "inactive" },
        { name: "Pending", value: "pending" },
      ],
    },
    birthDate: {
      name: "Birth Date",
      type: "date",
    },
    isActive: {
      name: "Is Active",
      type: "boolean",
    },
  };

  querySettings = {
    allowRuleSets: true,
  };

  queryData: QueryRuleSet = {
    condition: "and",
    rules: [],
  };

  onQueryChange(query: QueryRuleSet): void {
    console.log("Query changed:", query);
    // Handle query changes
  }

  onRuleAdded(rule: any): void {
    console.log("Rule added:", rule);
  }

  onRuleRemoved(rule: any): void {
    console.log("Rule removed:", rule);
  }
}
```

## 📚 API Reference

### Input Properties

| Property   | Type                 | Default | Description                  |
| ---------- | -------------------- | ------- | ---------------------------- |
| `fieldMap` | QueryBuilderFieldMap | -       | Field configuration map      |
| `settings` | QueryBuilderSettings | {}      | Query builder settings       |
| `data`     | QueryRuleSet         | -       | Query data (two-way binding) |
| `disabled` | boolean              | false   | Disable query builder        |
| `language` | string               | 'en'    | Interface language           |

### Output Events

| Event         | Type         | Description        |
| ------------- | ------------ | ------------------ |
| `queryChange` | EventEmitter | Query change event |
| `ruleAdded`   | EventEmitter | Rule added event   |
| `ruleRemoved` | EventEmitter | Rule removed event |

### Interfaces

#### QueryBuilderFieldMap

```typescript
export interface QueryBuilderFieldMap {
  [key: string]: QueryField;
}
```

#### QueryField

```typescript
export interface QueryField {
  name: string; // Display name
  type: string; // Field type
  value?: string; // Default value
  options?: SelectOption[]; // Options for select type
  settings?: QueryFieldSettings; // Field settings
}
```

#### QueryFieldSettings

```typescript
export interface QueryFieldSettings {
  nullableOperators?: boolean; // Allow null operators
  emptyOperators?: boolean; // Allow empty operators
}
```

#### QueryRule

```typescript
export interface QueryRule {
  field: string; // Field name
  type: string; // Field type
  operator: string; // Operator
  value?: any; // Field value
}
```

#### QueryRuleSet

```typescript
export interface QueryRuleSet {
  condition: string; // 'and' or 'or'
  rules: Array<QueryRuleSet | QueryRule>; // Nested rules
}
```

#### SelectOption

```typescript
export interface SelectOption {
  name: string; // Display name
  value: any; // Option value
}
```

## 🎨 Customization

### Custom Styling

```scss
// Custom query builder styles
.ngx-ntk-query-builder {
  .query-group-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 16px;

    .condition-switcher {
      display: flex;
      gap: 16px;

      .switch-radio {
        display: none;
      }

      .switch-label {
        padding: 8px 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #e0e0e0;
        }

        &.active {
          background-color: #2196f3;
          color: white;
          border-color: #2196f3;
        }
      }
    }

    .actions {
      display: flex;
      gap: 8px;

      .query-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;

        &.add {
          background-color: #4caf50;
          color: white;

          &:hover {
            background-color: #45a049;
          }
        }

        &.remove {
          background-color: #f44336;
          color: white;

          &:hover {
            background-color: #da190b;
          }
        }
      }
    }
  }

  .query-conditions {
    .rule-wrap {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
      background-color: #fff;

      .rule {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr auto;
        gap: 12px;
        align-items: center;

        .field,
        .operator,
        .value {
          .query-select,
          .query-input {
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

        .rule-controls {
          .query-btn {
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            background-color: #f44336;
            color: white;
            font-size: 12px;

            &:hover {
              background-color: #da190b;
            }
          }
        }
      }
    }
  }
}
```

### Custom Operators

```typescript
import { Injectable } from "@angular/core";
import { OperatorsService } from "ngx-ntk-query-builder";

@Injectable()
export class CustomOperatorsService extends OperatorsService {
  // Add custom operators
  private readonly customOperators = {
    string: ["custom_operator_1", "custom_operator_2"],
    integer: ["custom_numeric_operator"],
  };

  private readonly customOperatorsDisplayNames = {
    custom_operator_1: "Custom Operator 1",
    custom_operator_2: "Custom Operator 2",
    custom_numeric_operator: "Custom Numeric Operator",
  };

  getOperators(rule: QueryRule, fieldMap: QueryBuilderFieldMap): string[] {
    const baseOperators = super.getOperators(rule, fieldMap);
    const customOperators = this.customOperators[rule.type] || [];
    return [...baseOperators, ...customOperators];
  }

  getOperatorDisplayName(operator: string): string {
    return this.customOperatorsDisplayNames[operator] || super.getOperatorDisplayName(operator);
  }
}
```

## 🌐 Internationalization

### Translation Setup

```typescript
// Translation keys for query builder
const queryBuilderTranslations = {
  en: {
    querybuilder: {
      And: "AND",
      Or: "OR",
      AddRule: "Add Rule",
      AddGroup: "Add Group",
      Remove: "Remove",
      equal: "Equals",
      not_equal: "Does not equal",
      contains: "Contains",
      not_contains: "Does not contain",
      begins_with: "Begins with",
      not_begins_with: "Does not begin with",
      ends_with: "Ends with",
      not_ends_with: "Does not end with",
      greater: "Greater than",
      greater_or_equal: "Greater than or equal",
      less: "Less than",
      less_or_equal: "Less than or equal",
      is_null: "Is null",
      is_not_null: "Is not null",
      is_empty: "Is empty",
      is_not_empty: "Is not empty",
      in: "In",
      not_in: "Not in",
      Yes: "Yes",
      No: "No",
    },
  },
  fa: {
    querybuilder: {
      And: "و",
      Or: "یا",
      AddRule: "افزودن قانون",
      AddGroup: "افزودن گروه",
      Remove: "حذف",
      equal: "مساوی",
      not_equal: "مساوی نیست",
      contains: "شامل",
      not_contains: "شامل نیست",
      begins_with: "شروع می‌شود با",
      not_begins_with: "شروع نمی‌شود با",
      ends_with: "پایان می‌یابد با",
      not_ends_with: "پایان نمی‌یابد با",
      greater: "بزرگتر از",
      greater_or_equal: "بزرگتر یا مساوی",
      less: "کمتر از",
      less_or_equal: "کمتر یا مساوی",
      is_null: "خالی است",
      is_not_null: "خالی نیست",
      is_empty: "تهی است",
      is_not_empty: "تهی نیست",
      in: "در",
      not_in: "در نیست",
      Yes: "بله",
      No: "خیر",
    },
  },
};
```

## 🔒 Validation & Error Handling

### Query Validation

```typescript
// Custom query validation
validateQuery(query: QueryRuleSet): boolean {
  if (!query.rules || query.rules.length === 0) {
    return false;
  }

  return query.rules.every(rule => {
    if (this.isQueryRuleSet(rule)) {
      return this.validateQuery(rule);
    } else {
      return this.validateRule(rule);
    }
  });
}

private validateRule(rule: QueryRule): boolean {
  return rule.field && rule.type && rule.operator;
}

private isQueryRuleSet(rule: any): rule is QueryRuleSet {
  return 'condition' in rule && 'rules' in rule;
}
```

### Error Handling

```typescript
@Component({
  template: `
    <ngx-ntk-query-builder [fieldMap]="fieldMap" [(data)]="queryData" (queryChange)="onQueryChange($event)" (validationError)="onValidationError($event)"> </ngx-ntk-query-builder>

    <div *ngIf="validationError" class="error-message">
      {{ validationError }}
    </div>
  `,
})
export class QueryBuilderWithValidation {
  validationError: string = "";

  onQueryChange(query: QueryRuleSet): void {
    if (this.validateQuery(query)) {
      this.validationError = "";
      // Process valid query
    } else {
      this.validationError = "Invalid query structure";
    }
  }

  onValidationError(error: any): void {
    console.error("Query validation error:", error);
    this.validationError = "Query validation failed";
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxNtkQueryBuilderModule } from "ngx-ntk-query-builder";

describe("QueryBuilderComponent", () => {
  let component: QueryBuilderComponent;
  let fixture: ComponentFixture<QueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNtkQueryBuilderModule],
      declarations: [QueryBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit query change event", () => {
    const mockQuery: QueryRuleSet = {
      condition: "and",
      rules: [
        {
          field: "name",
          type: "string",
          operator: "contains",
          value: "test",
        },
      ],
    };
    spyOn(component.queryChange, "emit");

    component.onQueryChange(mockQuery);

    expect(component.queryChange.emit).toHaveBeenCalledWith(mockQuery);
  });

  it("should validate query structure", () => {
    const validQuery: QueryRuleSet = {
      condition: "and",
      rules: [
        {
          field: "name",
          type: "string",
          operator: "contains",
          value: "test",
        },
      ],
    };

    expect(component.validateQuery(validQuery)).toBe(true);
  });
});
```

### Integration Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgxNtkQueryBuilderModule } from "ngx-ntk-query-builder";

describe("QueryBuilder Integration", () => {
  let fixture: ComponentFixture<QueryBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNtkQueryBuilderModule],
      declarations: [QueryBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryBuilderComponent);
  });

  it("should display query builder interface", () => {
    fixture.detectChanges();

    const queryBuilder = fixture.nativeElement.querySelector(".ngx-ntk-query-builder");
    expect(queryBuilder).toBeTruthy();
  });

  it("should add rule when add rule button is clicked", () => {
    fixture.detectChanges();

    const addRuleButton = fixture.nativeElement.querySelector(".query-btn-add");
    addRuleButton.click();
    fixture.detectChanges();

    const rules = fixture.nativeElement.querySelectorAll(".rule-wrap");
    expect(rules.length).toBeGreaterThan(0);
  });

  it("should change condition when condition switcher is clicked", () => {
    fixture.detectChanges();

    const orCondition = fixture.nativeElement.querySelector('input[value="or"]');
    orCondition.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.queryData.condition).toBe("or");
  });
});
```

## ⚡ Performance

### Optimization Tips

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: "app-query-builder",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderComponent {
  // Implement trackBy function for ngFor
  trackByRule(index: number, rule: QueryRule | QueryRuleSet): string {
    return rule.field || `rule-${index}`;
  }

  // Debounce query changes
  private queryChangeSubject = new Subject<QueryRuleSet>();

  ngOnInit(): void {
    this.queryChangeSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
      )
      .subscribe((query) => {
        this.handleQueryChange(query);
      });
  }

  onQueryChange(query: QueryRuleSet): void {
    this.queryChangeSubject.next(query);
  }
}
```

### Memory Management

```typescript
// Proper cleanup
ngOnDestroy(): void {
  this.queryChangeSubject.complete();
  this.destroy$.next();
  this.destroy$.complete();
}

// Optimize field map updates
updateFieldMap(newFieldMap: QueryBuilderFieldMap): void {
  if (JSON.stringify(this.fieldMap) !== JSON.stringify(newFieldMap)) {
    this.fieldMap = newFieldMap;
    this.cdr.markForCheck();
  }
}
```

## 📝 Examples

### Basic Query Builder

```typescript
@Component({
  selector: "app-basic-query-builder",
  template: ` <ngx-ntk-query-builder [fieldMap]="fieldMap" [(data)]="queryData" (queryChange)="onQueryChange($event)"> </ngx-ntk-query-builder> `,
})
export class BasicQueryBuilderComponent {
  fieldMap: QueryBuilderFieldMap = {
    name: { name: "Name", type: "string" },
    age: { name: "Age", type: "integer" },
    email: { name: "Email", type: "string" },
  };

  queryData: QueryRuleSet = {
    condition: "and",
    rules: [],
  };

  onQueryChange(query: QueryRuleSet): void {
    console.log("Query:", query);
  }
}
```

### Advanced Query Builder with Custom Fields

```typescript
@Component({
  selector: "app-advanced-query-builder",
  template: `
    <ngx-ntk-query-builder [fieldMap]="fieldMap" [settings]="settings" [(data)]="queryData" (queryChange)="onQueryChange($event)"> </ngx-ntk-query-builder>

    <div class="query-preview">
      <h3>Generated Query:</h3>
      <pre>{{ queryPreview }}</pre>
    </div>
  `,
  styles: [
    `
      .query-preview {
        margin-top: 20px;
        padding: 16px;
        background-color: #f5f5f5;
        border-radius: 8px;

        pre {
          background-color: #fff;
          padding: 12px;
          border-radius: 4px;
          overflow-x: auto;
        }
      }
    `,
  ],
})
export class AdvancedQueryBuilderComponent {
  fieldMap: QueryBuilderFieldMap = {
    name: {
      name: "Name",
      type: "string",
      settings: {
        nullableOperators: true,
        emptyOperators: true,
      },
    },
    age: {
      name: "Age",
      type: "integer",
    },
    status: {
      name: "Status",
      type: "select",
      options: [
        { name: "Active", value: "active" },
        { name: "Inactive", value: "inactive" },
        { name: "Pending", value: "pending" },
      ],
    },
    birthDate: {
      name: "Birth Date",
      type: "date",
    },
    isActive: {
      name: "Is Active",
      type: "boolean",
    },
  };

  settings = {
    allowRuleSets: true,
  };

  queryData: QueryRuleSet = {
    condition: "and",
    rules: [],
  };

  get queryPreview(): string {
    return JSON.stringify(this.queryData, null, 2);
  }

  onQueryChange(query: QueryRuleSet): void {
    console.log("Advanced query:", query);
    // Generate SQL or other query format
    const sqlQuery = this.generateSQL(query);
    console.log("SQL Query:", sqlQuery);
  }

  private generateSQL(query: QueryRuleSet): string {
    // Implement SQL generation logic
    return "SELECT * FROM users WHERE " + this.buildWhereClause(query);
  }

  private buildWhereClause(query: QueryRuleSet): string {
    // Implement WHERE clause building logic
    return "";
  }
}
```

### Query Builder with Database Integration

```typescript
@Component({
  selector: "app-database-query-builder",
  template: `
    <ngx-ntk-query-builder [fieldMap]="fieldMap" [(data)]="queryData" (queryChange)="onQueryChange($event)"> </ngx-ntk-query-builder>

    <div class="query-actions">
      <button mat-raised-button color="primary" (click)="executeQuery()">Execute Query</button>
      <button mat-button (click)="saveQuery()">Save Query</button>
    </div>

    <div *ngIf="queryResults" class="query-results">
      <h3>Results ({{ queryResults.length }} records)</h3>
      <table mat-table [dataSource]="queryResults">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>
        <ng-container matColumnDef="age">
          <th mat-header-cell *matHeaderCellDef>Age</th>
          <td mat-cell *matCellDef="let element">{{ element.age }}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
})
export class DatabaseQueryBuilderComponent {
  fieldMap: QueryBuilderFieldMap = {
    name: { name: "Name", type: "string" },
    age: { name: "Age", type: "integer" },
    email: { name: "Email", type: "string" },
  };

  queryData: QueryRuleSet = {
    condition: "and",
    rules: [],
  };

  queryResults: any[] = [];
  displayedColumns = ["name", "age"];

  constructor(private dataService: DataService) {}

  onQueryChange(query: QueryRuleSet): void {
    console.log("Query changed:", query);
  }

  executeQuery(): void {
    const sqlQuery = this.generateSQL(this.queryData);
    this.dataService.executeQuery(sqlQuery).subscribe(
      (results) => {
        this.queryResults = results;
      },
      (error) => {
        console.error("Query execution failed:", error);
      }
    );
  }

  saveQuery(): void {
    this.dataService.saveQuery(this.queryData).subscribe(
      () => {
        console.log("Query saved successfully");
      },
      (error) => {
        console.error("Failed to save query:", error);
      }
    );
  }

  private generateSQL(query: QueryRuleSet): string {
    // Implement SQL generation logic
    return "SELECT * FROM users WHERE 1=1";
  }
}
```

## 🔄 Version History

### v20.25.5

- Initial release with core functionality
- Visual query builder interface
- Multiple data type support
- Nested conditions support
- Multi-language support
- Custom operators system

### v20.25.4

- Bug fixes and performance improvements
- Enhanced validation system
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

## 🆘 Support

For support and questions:

- 📝 **Create an issue** on [GitHub](https://github.com/akaravi/npm-ntk-cms-angular/issues)
- 📚 **Check documentation** - See [main README.md](../../README.md)
- 💬 **Contact** - [ntk.ir](https://ntk.ir)

## 📦 npm Package

Install from npm:

```bash
npm install ngx-ntk-query-builder
npm install @ngx-translate/core @ngx-translate/http-loader
```

**Package:** [npmjs.com/package/ngx-ntk-query-builder](https://www.npmjs.com/package/ngx-ntk-query-builder)

## 🔗 Related Libraries

This library is part of the **NTK CMS Angular Libraries** collection:

- [ntk-cms-api](../../README.md#1-ntk-cms-api-v20261) - API services and models
- [ntk-cms-filemanager](../../README.md#2-ntk-cms-filemanager-v20262) - File management system
- [ngx-ntk-icon-picker](../../README.md#6-ngx-ntk-icon-picker-v20261) - Icon selection component
- [ngx-ntk-file-picker](../../README.md#5-ngx-ntk-file-picker-v20262) - Advanced file picker
- [ngx-ntk-mat-color-picker](../../README.md#7-ngx-ntk-mat-color-picker-v20262) - Material color picker
- [ngx-ntk-cron-editor](../../README.md#4-ngx-ntk-cron-editor-v20262) - Cron expression editor
- [ngx-ntk-smart-module](../../README.md#9-ngx-ntk-smart-module-v20262) - Modal and loader system

For more information, see the [main project README](../../README.md).

---

<div align="center">

**Made with ❤️ by [NTK Team](https://ntk.ir)**

[⭐ Star us on GitHub](https://github.com/akaravi/npm-ntk-cms-angular) • [📦 View on npm](https://www.npmjs.com/package/ngx-ntk-query-builder)

</div>
