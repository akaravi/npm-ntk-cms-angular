# NTK CMS File Uploader

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20%20%7C%2021-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![npm](https://img.shields.io/npm/v/ntk-cms-fileuploader)

**Simple and efficient file upload component with progress tracking and validation**

[Installation](#-installation) • [Usage](#-usage) • [API Reference](#-api-reference) • [Examples](#-examples)

</div>

---

**ntk-cms-fileuploader** - Simple and efficient file upload component with progress tracking and validation

## 📋 Overview

The NTK CMS File Uploader is a lightweight and efficient file upload component designed for Angular applications. It provides drag & drop functionality, progress tracking, file validation, and customizable upload interface with minimal configuration.

## 🚀 Installation

```bash
npm install ntk-cms-fileuploader
```

## 📦 Features

### Core Features

- **Drag & Drop Upload** - Intuitive file upload interface
- **Progress Tracking** - Real-time upload progress
- **File Validation** - Type and size validation
- **Multiple File Support** - Upload multiple files simultaneously
- **Customizable UI** - Flexible styling and theming
- **Error Handling** - Comprehensive error management
- **Responsive Design** - Mobile-friendly interface

### Advanced Features

- **Chunked Upload** - Large file upload support
- **Retry Mechanism** - Automatic retry on failure
- **Preview Support** - File preview before upload
- **Queue Management** - Upload queue with priority
- **Cancel Upload** - Ability to cancel ongoing uploads

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NtkCmsFileuploaderModule } from "ntk-cms-fileuploader";

@NgModule({
  imports: [HttpClientModule, NtkCmsFileuploaderModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<ntk-cms-fileuploader [apiUrl]="'https://api.example.com/upload'" [maxFileSize]="5242880" [allowedFileTypes]="['image/*', 'application/pdf']" (uploadComplete)="onUploadComplete($event)" (uploadError)="onUploadError($event)"> </ntk-cms-fileuploader>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";

export class FileUploaderComponent {
  uploadConfig = {
    apiUrl: "https://api.example.com/upload",
    maxFileSize: 10485760, // 10MB
    allowedFileTypes: ["image/*", "application/pdf", "text/plain"],
    multiple: true,
    chunkSize: 1024 * 1024, // 1MB chunks
    retryAttempts: 3,
    autoUpload: true,
    showProgress: true,
    showPreview: true,
  };

  onUploadComplete(event: any): void {
    console.log("Upload completed:", event);
    // Handle successful upload
  }

  onUploadError(event: any): void {
    console.error("Upload failed:", event);
    // Handle upload error
  }

  onFileSelected(event: any): void {
    console.log("File selected:", event);
    // Handle file selection
  }

  onUploadProgress(event: any): void {
    console.log("Upload progress:", event.progress);
    // Handle progress updates
  }
}
```

## 📚 API Reference

### Input Properties

| Property           | Type     | Default      | Description                   |
| ------------------ | -------- | ------------ | ----------------------------- |
| `apiUrl`           | string   | -            | Upload endpoint URL           |
| `maxFileSize`      | number   | 5242880      | Maximum file size (5MB)       |
| `allowedFileTypes` | string[] | []           | Allowed file types            |
| `multiple`         | boolean  | false        | Allow multiple file selection |
| `chunkSize`        | number   | 1024 \* 1024 | Chunk size for large files    |
| `retryAttempts`    | number   | 3            | Number of retry attempts      |
| `autoUpload`       | boolean  | true         | Auto-upload on file selection |
| `showProgress`     | boolean  | true         | Show progress bar             |
| `showPreview`      | boolean  | false        | Show file preview             |
| `disabled`         | boolean  | false        | Disable upload functionality  |

### Output Events

| Event            | Type         | Description               |
| ---------------- | ------------ | ------------------------- |
| `uploadComplete` | EventEmitter | Upload completion event   |
| `uploadError`    | EventEmitter | Upload error event        |
| `fileSelected`   | EventEmitter | File selection event      |
| `uploadProgress` | EventEmitter | Upload progress event     |
| `uploadCancel`   | EventEmitter | Upload cancellation event |

### Service Methods

#### FileUploaderService

```typescript
// Upload single file
uploadFile(file: File): Observable<any>

// Upload multiple files
uploadFiles(files: File[]): Observable<any>

// Cancel upload
cancelUpload(uploadId: string): void

// Get upload progress
getUploadProgress(uploadId: string): Observable<number>

// Validate file
validateFile(file: File): boolean
```

## 🎨 Customization

### Custom Styling

```scss
// Custom uploader styles
.ntk-cms-fileuploader {
  .upload-zone {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      border-color: #2196f3;
      background-color: #f5f5f5;
    }

    &.drag-over {
      border-color: #2196f3;
      background-color: #e3f2fd;
      transform: scale(1.02);
    }
  }

  .file-item {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fafafa;

    .file-info {
      flex: 1;
      margin-left: 10px;
    }

    .file-name {
      font-weight: 500;
      color: #333;
    }

    .file-size {
      font-size: 12px;
      color: #666;
    }

    .progress-bar {
      height: 4px;
      background-color: #e0e0e0;
      border-radius: 2px;
      overflow: hidden;
      margin-top: 5px;

      .progress-fill {
        height: 100%;
        background-color: #2196f3;
        transition: width 0.3s ease;
      }
    }

    .upload-status {
      margin-left: 10px;

      &.success {
        color: #4caf50;
      }

      &.error {
        color: #f44336;
      }

      &.uploading {
        color: #2196f3;
      }
    }
  }
}
```

### Custom Templates

```html
<ntk-cms-fileuploader [config]="uploadConfig">
  <!-- Custom upload zone template -->
  <ng-template #uploadZoneTemplate>
    <div class="custom-upload-zone">
      <i class="upload-icon fas fa-cloud-upload-alt"></i>
      <h3>Drop files here or click to upload</h3>
      <p>Maximum file size: {{ maxFileSize | fileSize }}</p>
      <p>Allowed types: {{ allowedFileTypes.join(', ') }}</p>
    </div>
  </ng-template>

  <!-- Custom file item template -->
  <ng-template #fileItemTemplate let-file let-progress="progress">
    <div class="custom-file-item">
      <div class="file-icon">
        <i [class]="getFileIcon(file.type)"></i>
      </div>
      <div class="file-details">
        <div class="file-name">{{ file.name }}</div>
        <div class="file-size">{{ file.size | fileSize }}</div>
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="progress"></div>
          </div>
          <span class="progress-text">{{ progress }}%</span>
        </div>
      </div>
      <div class="file-actions">
        <button (click)="cancelUpload(file.id)" *ngIf="progress < 100">
          <i class="fas fa-times"></i>
        </button>
        <i class="fas fa-check success-icon" *ngIf="progress === 100"></i>
      </div>
    </div>
  </ng-template>
</ntk-cms-fileuploader>
```

## 🔐 Security

### File Validation

```typescript
export class FileUploaderComponent {
  validateFile(file: File): boolean {
    // Check file size
    if (file.size > this.maxFileSize) {
      this.showError(`File size exceeds ${this.formatFileSize(this.maxFileSize)}`);
      return false;
    }

    // Check file type
    const allowedTypes = this.allowedFileTypes;
    if (allowedTypes.length > 0) {
      const isValidType = allowedTypes.some((type) => {
        if (type.endsWith("/*")) {
          return file.type.startsWith(type.replace("/*", ""));
        }
        return file.type === type;
      });

      if (!isValidType) {
        this.showError(`File type ${file.type} is not allowed`);
        return false;
      }
    }

    // Check file name
    if (!this.isValidFileName(file.name)) {
      this.showError("Invalid file name");
      return false;
    }

    return true;
  }

  private isValidFileName(fileName: string): boolean {
    // Check for invalid characters
    const invalidChars = /[<>:"/\\|?*]/;
    return !invalidChars.test(fileName);
  }

  private formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  private showError(message: string): void {
    // Show error message to user
    console.error(message);
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NtkCmsFileuploaderModule } from "ntk-cms-fileuploader";

describe("FileUploaderComponent", () => {
  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NtkCmsFileuploaderModule],
      declarations: [FileUploaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should validate file size correctly", () => {
    const mockFile = new File(["test"], "test.txt", { type: "text/plain" });
    Object.defineProperty(mockFile, "size", { value: 1024 * 1024 }); // 1MB

    component.maxFileSize = 5242880; // 5MB
    expect(component.validateFile(mockFile)).toBe(true);

    component.maxFileSize = 512 * 1024; // 512KB
    expect(component.validateFile(mockFile)).toBe(false);
  });

  it("should validate file type correctly", () => {
    const mockFile = new File(["test"], "test.txt", { type: "text/plain" });

    component.allowedFileTypes = ["text/plain", "application/pdf"];
    expect(component.validateFile(mockFile)).toBe(true);

    component.allowedFileTypes = ["image/*"];
    expect(component.validateFile(mockFile)).toBe(false);
  });

  it("should handle upload completion", () => {
    const mockEvent = { file: "test.txt", response: { success: true } };
    spyOn(component.uploadComplete, "emit");

    component.onUploadComplete(mockEvent);

    expect(component.uploadComplete.emit).toHaveBeenCalledWith(mockEvent);
  });
});
```

## 📊 Performance

### Optimization Tips

1. **Chunked Upload**: Use chunked upload for large files
2. **Compression**: Compress files before upload when possible
3. **Queue Management**: Implement upload queue for better control
4. **Caching**: Cache upload progress and file metadata
5. **Lazy Loading**: Load uploader component on demand

### Memory Management

```typescript
export class FileUploaderComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private uploadSubscriptions: Subscription[] = [];

  ngOnInit(): void {
    // Subscribe to upload events
    this.uploadService.uploadProgress$.pipe(takeUntil(this.destroy$)).subscribe((progress) => {
      this.updateProgress(progress);
    });
  }

  uploadFile(file: File): void {
    const uploadSub = this.uploadService
      .uploadFile(file)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => this.onUploadComplete(result),
        (error) => this.onUploadError(error)
      );

    this.uploadSubscriptions.push(uploadSub);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    // Cancel all ongoing uploads
    this.uploadSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}
```

## 🔄 Version History

### v18.26.4

- Initial release with core functionality
- Drag & drop support
- Progress tracking
- File validation
- Basic error handling

### v18.26.3

- Bug fixes and performance improvements
- Enhanced error handling
- Improved UI/UX

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

- 📝 **Create an issue** on [GitHub](https://github.com/akaravi/npm-ntk-cms-angular/issues)
- 📚 **Check documentation** - See [main README.md](../../README.md)
- 💬 **Contact** - [ntk.ir](https://ntk.ir)

## 📦 npm Package

Install from npm:

```bash
npm install ntk-cms-fileuploader
```

**Package:** [npmjs.com/package/ntk-cms-fileuploader](https://www.npmjs.com/package/ntk-cms-fileuploader)

## 🔗 Related Libraries

This library is part of the **NTK CMS Angular Libraries** collection:

- [ntk-cms-api](../../README.md#1-ntk-cms-api-v20261) - API services and models
- [ntk-cms-filemanager](../../README.md#2-ntk-cms-filemanager-v20262) - File management system
- [ngx-ntk-icon-picker](../../README.md#6-ngx-ntk-icon-picker-v20261) - Icon selection component
- [ngx-ntk-file-picker](../../README.md#5-ngx-ntk-file-picker-v20262) - Advanced file picker
- [ngx-ntk-mat-color-picker](../../README.md#7-ngx-ntk-mat-color-picker-v20262) - Material color picker
- [ngx-ntk-cron-editor](../../README.md#4-ngx-ntk-cron-editor-v20262) - Cron expression editor
- [ngx-ntk-query-builder](../../README.md#8-ngx-ntk-query-builder-v20262) - Visual query builder
- [ngx-ntk-smart-module](../../README.md#9-ngx-ntk-smart-module-v20262) - Modal and loader system

For more information, see the [main project README](../../README.md).

---

<div align="center">

**Made with ❤️ by [NTK Team](https://ntk.ir)**

[⭐ Star us on GitHub](https://github.com/akaravi/npm-ntk-cms-angular) • [📦 View on npm](https://www.npmjs.com/package/ntk-cms-fileuploader)

</div>
