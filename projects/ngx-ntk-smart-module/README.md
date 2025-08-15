# NGX NTK Smart Module

**ngx-ntk-smart-module** - Advanced Angular smart loader and modal components with enhanced functionality, animations, and accessibility features

## 📋 Overview

The NGX NTK Smart Module is a comprehensive Angular library that provides advanced smart loader and modal components. It includes sophisticated loading management, modal stacking, dynamic content injection, and extensive customization options. Perfect for applications requiring professional loading states and modal dialogs with advanced features.

## 🚀 Installation

```bash
npm install ngx-ntk-smart-module
```

## 📦 Features

### Smart Loader Features

- **Multiple Loader Support** - Manage multiple loaders simultaneously
- **Auto-start Capability** - Automatic loader initialization
- **Custom Delays** - Configurable show/hide delays
- **Force Loading** - Override other loaders when needed
- **Custom Styling** - Flexible CSS customization
- **Event Handling** - Comprehensive event system
- **Layer Management** - Automatic z-index management

### Smart Modal Features

- **Modal Stacking** - Multiple modals with proper layering
- **Dynamic Content** - Inject components dynamically
- **Backdrop Management** - Configurable backdrop behavior
- **Keyboard Support** - ESC key handling and focus management
- **Accessibility** - ARIA attributes and screen reader support
- **Animation Support** - Smooth open/close animations
- **Data Passing** - Pass data between modals and components

### Advanced Features

- **Service-based Architecture** - Centralized management
- **Event-driven Communication** - Comprehensive event system
- **Responsive Design** - Mobile-friendly interface
- **Performance Optimized** - Efficient rendering and memory management
- **TypeScript Support** - Full type safety
- **Customizable Themes** - Flexible styling options

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { NtkSmartLoaderModule } from "ngx-ntk-smart-module/loader";
import { NtkSmartModalModule } from "ngx-ntk-smart-module/modal";

@NgModule({
  imports: [NtkSmartLoaderModule, NtkSmartModalModule],
})
export class AppModule {}
```

### Smart Loader Implementation

#### Basic Loader

```html
<ntk-smart-loader identifier="main-loader" [autostart]="false">
  <div class="custom-loader">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</ntk-smart-loader>
```

#### Advanced Loader Configuration

```typescript
import { Component } from "@angular/core";
import { NtkSmartLoaderService } from "ngx-ntk-smart-module/loader";

@Component({
  selector: "app-loader-example",
  template: `
    <ntk-smart-loader identifier="advanced-loader" [customClass]="'custom-loader-class'" [force]="false" [delayIn]="200" [delayOut]="300" [autostart]="false" (onStart)="onLoaderStart($event)" (onStop)="onLoaderStop($event)" (onVisibleChange)="onVisibleChange($event)">
      <div class="loader-content">
        <div class="spinner"></div>
        <p>{{ loadingMessage }}</p>
      </div>
    </ntk-smart-loader>
  `,
})
export class LoaderExampleComponent {
  loadingMessage: string = "Loading data...";

  constructor(private loaderService: NtkSmartLoaderService) {}

  startLoader(): void {
    this.loaderService.start("advanced-loader");
  }

  stopLoader(): void {
    this.loaderService.stop("advanced-loader");
  }

  onLoaderStart(loader: any): void {
    console.log("Loader started:", loader);
  }

  onLoaderStop(loader: any): void {
    console.log("Loader stopped:", loader);
  }

  onVisibleChange(loader: any): void {
    console.log("Loader visibility changed:", loader);
  }
}
```

### Smart Modal Implementation

#### Basic Modal

```html
<ntk-smart-modal identifier="basic-modal" [visible]="false">
  <div class="modal-content">
    <h2>Basic Modal</h2>
    <p>This is a basic modal content.</p>
    <button (click)="closeModal()">Close</button>
  </div>
</ntk-smart-modal>
```

#### Advanced Modal Configuration

```typescript
import { Component } from "@angular/core";
import { NtkSmartModalService } from "ngx-ntk-smart-module/modal";

@Component({
  selector: "app-modal-example",
  template: `
    <ntk-smart-modal identifier="advanced-modal" [closable]="true" [escapable]="true" [dismissable]="true" [customClass]="'custom-modal-class'" [backdrop]="true" [force]="true" [hideDelay]="500" [autostart]="false" [ariaLabel]="'Advanced Modal'" [refocus]="true" (onOpen)="onModalOpen($event)" (onClose)="onModalClose($event)" (onDismiss)="onModalDismiss($event)">
      <div class="modal-content">
        <h2>Advanced Modal</h2>
        <p>This is an advanced modal with full configuration.</p>
        <div class="modal-actions">
          <button (click)="confirmAction()">Confirm</button>
          <button (click)="closeModal()">Cancel</button>
        </div>
      </div>
    </ntk-smart-modal>
  `,
})
export class ModalExampleComponent {
  constructor(private modalService: NtkSmartModalService) {}

  openModal(): void {
    this.modalService.open("advanced-modal");
  }

  closeModal(): void {
    this.modalService.close("advanced-modal");
  }

  onModalOpen(modal: any): void {
    console.log("Modal opened:", modal);
  }

  onModalClose(modal: any): void {
    console.log("Modal closed:", modal);
  }

  onModalDismiss(modal: any): void {
    console.log("Modal dismissed:", modal);
  }

  confirmAction(): void {
    // Handle confirmation
    this.closeModal();
  }
}
```

## 📚 API Reference

### Smart Loader API

#### Input Properties

| Property      | Type    | Default | Description                      |
| ------------- | ------- | ------- | -------------------------------- |
| `identifier`  | string  | ''      | Unique identifier for the loader |
| `customClass` | string  | ''      | Custom CSS class                 |
| `force`       | boolean | false   | Force loader to override others  |
| `delayIn`     | number  | 0       | Delay before showing loader (ms) |
| `delayOut`    | number  | 0       | Delay before hiding loader (ms)  |
| `autostart`   | boolean | false   | Auto-start the loader            |

#### Output Events

| Event             | Type         | Description             |
| ----------------- | ------------ | ----------------------- |
| `onStart`         | EventEmitter | Loader start event      |
| `onStop`          | EventEmitter | Loader stop event       |
| `onVisibleChange` | EventEmitter | Visibility change event |

#### Service Methods

```typescript
// Start a loader
start(identifier: string): void

// Stop a loader
stop(identifier: string): void

// Add a loader
addLoader(loader: LoaderInstance, force?: boolean): void

// Remove a loader
removeLoader(identifier: string): void

// Get loader stack count
getLoaderStackCount(): number
```

### Smart Modal API

#### Input Properties

| Property      | Type    | Default                     | Description                     |
| ------------- | ------- | --------------------------- | ------------------------------- |
| `identifier`  | string  | ''                          | Unique identifier for the modal |
| `closable`    | boolean | true                        | Show close button               |
| `escapable`   | boolean | true                        | Allow ESC key to close          |
| `dismissable` | boolean | true                        | Allow backdrop click to close   |
| `customClass` | string  | 'nsm-dialog-animation-fade' | Custom CSS class                |
| `visible`     | boolean | false                       | Modal visibility                |
| `backdrop`    | boolean | true                        | Show backdrop                   |
| `force`       | boolean | true                        | Force modal to top              |
| `hideDelay`   | number  | 500                         | Delay before hiding (ms)        |
| `autostart`   | boolean | false                       | Auto-start the modal            |
| `ariaLabel`   | string  | null                        | ARIA label                      |
| `refocus`     | boolean | true                        | Refocus on close                |

#### Output Events

| Event           | Type         | Description             |
| --------------- | ------------ | ----------------------- |
| `visibleChange` | EventEmitter | Visibility change event |
| `onOpen`        | EventEmitter | Modal open event        |
| `onClose`       | EventEmitter | Modal close event       |
| `onDismiss`     | EventEmitter | Modal dismiss event     |
| `onEscape`      | EventEmitter | ESC key event           |
| `onDataAdded`   | EventEmitter | Data added event        |
| `onDataRemoved` | EventEmitter | Data removed event      |

#### Service Methods

```typescript
// Open a modal
open(identifier: string): void

// Close a modal
close(identifier: string): void

// Add data to modal
addData(identifier: string, data: any): void

// Get data from modal
getData(identifier: string): any

// Remove data from modal
removeData(identifier: string): void

// Get modal instance
get(identifier: string): any

// Check if modal is open
isOpen(identifier: string): boolean
```

## 🎨 Customization

### Custom Loader Styling

```scss
// Custom loader styles
.custom-loader-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader-content {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-align: center;

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 16px;
    }

    p {
      margin: 0;
      color: #333;
      font-size: 16px;
    }
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
  }

  &:not(.active) {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

### Custom Modal Styling

```scss
// Custom modal styles
.custom-modal-class {
  .nsm-dialog {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 90%;
    margin: 20px auto;

    .nsm-content {
      padding: 24px;

      .nsm-body {
        h2 {
          margin: 0 0 16px 0;
          color: #333;
          font-size: 24px;
        }

        p {
          margin: 0 0 20px 0;
          color: #666;
          line-height: 1.5;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;

          button {
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;

            &:first-child {
              background-color: #2196f3;
              color: white;

              &:hover {
                background-color: #1976d2;
              }
            }

            &:last-child {
              background-color: #f5f5f5;
              color: #333;

              &:hover {
                background-color: #e0e0e0;
              }
            }
          }
        }
      }
    }

    .nsm-dialog-btn-close {
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f5f5f5;
      }

      svg {
        width: 16px;
        height: 16px;
        color: #666;
      }
    }
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
}
```

## 🌐 Advanced Usage

### Multiple Loaders Management

```typescript
@Component({
  template: `
    <ntk-smart-loader identifier="main-loader"></ntk-smart-loader>
    <ntk-smart-loader identifier="secondary-loader"></ntk-smart-loader>
    <ntk-smart-loader identifier="force-loader" [force]="true"></ntk-smart-loader>
  `,
})
export class MultipleLoadersComponent {
  constructor(private loaderService: NtkSmartLoaderService) {}

  startMainLoader(): void {
    this.loaderService.start("main-loader");
  }

  startSecondaryLoader(): void {
    this.loaderService.start("secondary-loader");
  }

  startForceLoader(): void {
    // This will override other loaders
    this.loaderService.start("force-loader");
  }

  stopAllLoaders(): void {
    this.loaderService.stop("main-loader");
    this.loaderService.stop("secondary-loader");
    this.loaderService.stop("force-loader");
  }
}
```

### Modal with Dynamic Content

```typescript
@Component({
  template: `
    <ntk-smart-modal identifier="dynamic-modal">
      <ng-container *ngTemplateOutlet="modalContent"></ng-container>
    </ntk-smart-modal>
  `,
})
export class DynamicModalComponent {
  modalContent: any;

  constructor(private modalService: NtkSmartModalService) {}

  openModalWithContent(content: any): void {
    this.modalContent = content;
    this.modalService.open("dynamic-modal");
  }

  openModalWithData(data: any): void {
    this.modalService.addData("dynamic-modal", data);
    this.modalService.open("dynamic-modal");
  }

  getModalData(): any {
    return this.modalService.getData("dynamic-modal");
  }
}
```

### Modal Stacking

```typescript
@Component({
  template: `
    <ntk-smart-modal identifier="modal-1" [customClass]="'modal-layer-1'">
      <div>First Modal</div>
      <button (click)="openSecondModal()">Open Second Modal</button>
    </ntk-smart-modal>

    <ntk-smart-modal identifier="modal-2" [customClass]="'modal-layer-2'">
      <div>Second Modal</div>
      <button (click)="openThirdModal()">Open Third Modal</button>
    </ntk-smart-modal>

    <ntk-smart-modal identifier="modal-3" [customClass]="'modal-layer-3'">
      <div>Third Modal</div>
      <button (click)="closeAllModals()">Close All</button>
    </ntk-smart-modal>
  `,
})
export class ModalStackingComponent {
  constructor(private modalService: NtkSmartModalService) {}

  openFirstModal(): void {
    this.modalService.open("modal-1");
  }

  openSecondModal(): void {
    this.modalService.open("modal-2");
  }

  openThirdModal(): void {
    this.modalService.open("modal-3");
  }

  closeAllModals(): void {
    this.modalService.close("modal-3");
    this.modalService.close("modal-2");
    this.modalService.close("modal-1");
  }
}
```

## 🔒 Error Handling

### Loader Error Handling

```typescript
@Component({
  template: ` <ntk-smart-loader identifier="error-handler-loader" (onStart)="onLoaderStart($event)" (onStop)="onLoaderStop($event)"> </ntk-smart-loader> `,
})
export class LoaderErrorHandlerComponent {
  constructor(private loaderService: NtkSmartLoaderService) {}

  async loadDataWithErrorHandling(): Promise<void> {
    try {
      this.loaderService.start("error-handler-loader");

      // Simulate async operation
      await this.simulateAsyncOperation();

      this.loaderService.stop("error-handler-loader");
    } catch (error) {
      console.error("Error during loading:", error);
      this.loaderService.stop("error-handler-loader");
      // Handle error (show toast, etc.)
    }
  }

  onLoaderStart(loader: any): void {
    console.log("Loader started successfully");
  }

  onLoaderStop(loader: any): void {
    console.log("Loader stopped successfully");
  }

  private simulateAsyncOperation(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error("Random error occurred"));
        }
      }, 2000);
    });
  }
}
```

### Modal Error Handling

```typescript
@Component({
  template: `
    <ntk-smart-modal identifier="error-modal" (onOpen)="onModalOpen($event)" (onClose)="onModalClose($event)" (onDismiss)="onModalDismiss($event)">
      <div class="error-modal-content">
        <h2>Error Modal</h2>
        <p>{{ errorMessage }}</p>
        <button (click)="retryOperation()">Retry</button>
        <button (click)="closeModal()">Close</button>
      </div>
    </ntk-smart-modal>
  `,
})
export class ModalErrorHandlerComponent {
  errorMessage: string = "";

  constructor(private modalService: NtkSmartModalService) {}

  showErrorModal(error: Error): void {
    this.errorMessage = error.message;
    this.modalService.open("error-modal");
  }

  onModalOpen(modal: any): void {
    console.log("Error modal opened");
  }

  onModalClose(modal: any): void {
    console.log("Error modal closed");
  }

  onModalDismiss(modal: any): void {
    console.log("Error modal dismissed");
  }

  retryOperation(): void {
    // Implement retry logic
    this.modalService.close("error-modal");
  }

  closeModal(): void {
    this.modalService.close("error-modal");
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NtkSmartLoaderModule } from "ngx-ntk-smart-module/loader";
import { NtkSmartModalModule } from "ngx-ntk-smart-module/modal";

describe("SmartModuleComponent", () => {
  let component: SmartModuleComponent;
  let fixture: ComponentFixture<SmartModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NtkSmartLoaderModule, NtkSmartModalModule],
      declarations: [SmartModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should start loader", () => {
    spyOn(component.loaderService, "start");
    component.startLoader();
    expect(component.loaderService.start).toHaveBeenCalledWith("test-loader");
  });

  it("should open modal", () => {
    spyOn(component.modalService, "open");
    component.openModal();
    expect(component.modalService.open).toHaveBeenCalledWith("test-modal");
  });
});
```

### Integration Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NtkSmartLoaderModule } from "ngx-ntk-smart-module/loader";
import { NtkSmartModalModule } from "ngx-ntk-smart-module/modal";

describe("SmartModule Integration", () => {
  let fixture: ComponentFixture<SmartModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NtkSmartLoaderModule, NtkSmartModalModule],
      declarations: [SmartModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartModuleComponent);
  });

  it("should display loader when started", () => {
    fixture.detectChanges();

    const loader = fixture.nativeElement.querySelector("ntk-smart-loader");
    expect(loader).toBeTruthy();
  });

  it("should display modal when opened", () => {
    fixture.detectChanges();

    const modal = fixture.nativeElement.querySelector("ntk-smart-modal");
    expect(modal).toBeTruthy();
  });

  it("should handle multiple loaders", () => {
    fixture.detectChanges();

    const loaders = fixture.nativeElement.querySelectorAll("ntk-smart-loader");
    expect(loaders.length).toBeGreaterThan(0);
  });
});
```

## ⚡ Performance

### Optimization Tips

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: "app-smart-module",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartModuleComponent {
  // Implement proper cleanup
  ngOnDestroy(): void {
    this.loaderService.stop("main-loader");
    this.modalService.close("main-modal");
  }

  // Debounce loader operations
  private loaderSubject = new Subject<string>();

  ngOnInit(): void {
    this.loaderSubject.pipe(debounceTime(100), distinctUntilChanged()).subscribe((identifier) => {
      this.loaderService.start(identifier);
    });
  }

  startLoaderWithDebounce(identifier: string): void {
    this.loaderSubject.next(identifier);
  }
}
```

### Memory Management

```typescript
// Proper cleanup and memory management
export class SmartModuleManager {
  private loaders: Set<string> = new Set();
  private modals: Set<string> = new Set();

  addLoader(identifier: string): void {
    this.loaders.add(identifier);
  }

  removeLoader(identifier: string): void {
    this.loaders.delete(identifier);
  }

  addModal(identifier: string): void {
    this.modals.add(identifier);
  }

  removeModal(identifier: string): void {
    this.modals.delete(identifier);
  }

  cleanup(): void {
    this.loaders.clear();
    this.modals.clear();
  }
}
```

## 📝 Examples

### Complete Application Example

```typescript
@Component({
  selector: "app-complete-example",
  template: `
    <!-- Loaders -->
    <ntk-smart-loader identifier="main-loader" [autostart]="false">
      <div class="main-loader">Loading main content...</div>
    </ntk-smart-loader>

    <ntk-smart-loader identifier="form-loader" [autostart]="false">
      <div class="form-loader">Saving form...</div>
    </ntk-smart-loader>

    <!-- Modals -->
    <ntk-smart-modal identifier="confirmation-modal">
      <div class="confirmation-content">
        <h3>Confirm Action</h3>
        <p>Are you sure you want to proceed?</p>
        <div class="actions">
          <button (click)="confirm()">Yes</button>
          <button (click)="cancel()">No</button>
        </div>
      </div>
    </ntk-smart-modal>

    <ntk-smart-modal identifier="form-modal">
      <div class="form-content">
        <h3>User Form</h3>
        <form (ngSubmit)="submitForm()">
          <input type="text" placeholder="Name" [(ngModel)]="user.name" />
          <input type="email" placeholder="Email" [(ngModel)]="user.email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </ntk-smart-modal>

    <!-- Main Content -->
    <div class="main-content">
      <button (click)="loadData()">Load Data</button>
      <button (click)="showConfirmation()">Show Confirmation</button>
      <button (click)="showForm()">Show Form</button>
    </div>
  `,
})
export class CompleteExampleComponent {
  user = { name: "", email: "" };

  constructor(private loaderService: NtkSmartLoaderService, private modalService: NtkSmartModalService) {}

  async loadData(): Promise<void> {
    this.loaderService.start("main-loader");

    try {
      await this.simulateDataLoading();
      console.log("Data loaded successfully");
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      this.loaderService.stop("main-loader");
    }
  }

  showConfirmation(): void {
    this.modalService.open("confirmation-modal");
  }

  showForm(): void {
    this.modalService.open("form-modal");
  }

  async submitForm(): Promise<void> {
    this.loaderService.start("form-loader");

    try {
      await this.simulateFormSubmission();
      this.modalService.close("form-modal");
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      this.loaderService.stop("form-loader");
    }
  }

  confirm(): void {
    this.modalService.close("confirmation-modal");
    console.log("Action confirmed");
  }

  cancel(): void {
    this.modalService.close("confirmation-modal");
    console.log("Action cancelled");
  }

  private simulateDataLoading(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }
}
```

## 🔄 Version History

### v20.25.3

- Initial release with core functionality
- Smart loader component with multiple loader support
- Smart modal component with stacking capabilities
- Service-based architecture
- Event-driven communication
- Accessibility features

### v20.25.2

- Bug fixes and performance improvements
- Enhanced error handling
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
