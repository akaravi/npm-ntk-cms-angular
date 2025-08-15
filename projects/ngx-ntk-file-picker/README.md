# NGX NTK File Picker

**ngx-ntk-file-picker** - Advanced Angular file upload component with drag & drop, real-time progress, file preview, image cropping, and multi-language support

## 📋 Overview

The NGX NTK File Picker is a powerful Angular component for handling file uploads with advanced features like drag & drop functionality, real-time upload progress, file preview, image cropping, and comprehensive validation. Perfect for modern web applications requiring robust file upload capabilities.

## 🚀 Installation

```bash
npm install ngx-ntk-file-picker
```

## 📦 Features

### Core Features

- **Drag & Drop Upload** - Intuitive drag and drop interface
- **Real-time Progress Tracking** - Live upload progress indicators
- **File Preview** - Preview images, documents, and other file types
- **Image Cropping** - Built-in image cropping with Cropper.js
- **Multi-file Support** - Upload single or multiple files
- **File Validation** - Comprehensive file type and size validation
- **Custom Templates** - Flexible template customization
- **Multi-language Support** - Internationalization ready

### Advanced Features

- **Custom Adapters** - Flexible API integration
- **File Type Filtering** - Restrict file types and extensions
- **Size Limits** - Individual and total file size restrictions
- **Auto Upload** - Configurable automatic upload behavior
- **Error Handling** - Comprehensive error management
- **Responsive Design** - Mobile-friendly interface
- **Accessibility** - ARIA support and keyboard navigation

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { FilePickerModule } from "ngx-ntk-file-picker";

@NgModule({
  imports: [FilePickerModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<ngx-ntk-file-picker [adapter]="fileAdapter" [accept]="'image/*,application/pdf'" [fileMaxSize]="5" [fileMaxCount]="10" (uploadSuccess)="onUploadSuccess($event)" (uploadFail)="onUploadFail($event)" (fileAdded)="onFileAdded($event)" (fileRemoved)="onFileRemoved($event)"> </ngx-ntk-file-picker>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { FilePickerAdapter, UploadResponse, UploadStatus } from "ngx-ntk-file-picker";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-file-upload",
  template: ` <ngx-ntk-file-picker [adapter]="customAdapter" [enableCropper]="true" [uploadType]="'multi'" [fileMaxSize]="10" [fileMaxCount]="5" [totalMaxSize]="50" [accept]="'image/*,application/pdf,text/plain'" [fileExtensions]="['jpg', 'png', 'pdf', 'txt']" [enableAutoUpload]="true" [showeDragDropZone]="true" [showPreviewContainer]="true" [captions]="customCaptions" (uploadSuccess)="onUploadSuccess($event)" (uploadFail)="onUploadFail($event)" (validationError)="onValidationError($event)"> </ngx-ntk-file-picker> `,
})
export class FileUploadComponent {
  customAdapter: FilePickerAdapter = {
    uploadFile(fileItem): Observable<UploadResponse> {
      // Custom upload logic
      return of({
        status: UploadStatus.UPLOADED,
        body: { url: "https://example.com/file.jpg" },
      });
    },

    removeFile(fileItem): Observable<any> {
      // Custom remove logic
      return of({ success: true });
    },
  };

  customCaptions = {
    dropzone: {
      title: "فایل خود را اینجا رها کنید",
      or: "یا",
      browse: "انتخاب فایل",
    },
    cropper: {
      crop: "برش",
      cancel: "لغو",
    },
    previewCard: {
      remove: "حذف",
      uploadError: "خطا در آپلود",
    },
  };

  onUploadSuccess(file: any): void {
    console.log("Upload successful:", file);
  }

  onUploadFail(error: any): void {
    console.error("Upload failed:", error);
  }

  onValidationError(error: any): void {
    console.error("Validation error:", error);
  }
}
```

## 📚 API Reference

### Input Properties

| Property               | Type              | Default         | Description                                             |
| ---------------------- | ----------------- | --------------- | ------------------------------------------------------- |
| `adapter`              | FilePickerAdapter | -               | Custom API adapter for upload/remove operations         |
| `accept`               | string            | -               | File types to accept (e.g., 'image/\*,application/pdf') |
| `fileExtensions`       | string[]          | -               | Allowed file extensions                                 |
| `fileMaxSize`          | number            | -               | Maximum file size in MB                                 |
| `fileMaxCount`         | number            | -               | Maximum number of files                                 |
| `totalMaxSize`         | number            | -               | Total maximum size for all files in MB                  |
| `uploadType`           | string            | 'multi'         | 'single' or 'multi' upload mode                         |
| `enableAutoUpload`     | boolean           | true            | Auto-upload on file selection                           |
| `enableCropper`        | boolean           | false           | Enable image cropping                                   |
| `showeDragDropZone`    | boolean           | true            | Show drag & drop zone                                   |
| `showPreviewContainer` | boolean           | true            | Show file preview container                             |
| `cropperOptions`       | object            | -               | Cropper.js configuration options                        |
| `customValidator`      | function          | -               | Custom validation function                              |
| `captions`             | UploaderCaptions  | DefaultCaptions | Custom captions for i18n                                |
| `itemTemplate`         | TemplateRef       | -               | Custom preview item template                            |
| `dropzoneTemplate`     | TemplateRef       | -               | Custom dropzone template                                |

### Output Events

| Event             | Type         | Description                   |
| ----------------- | ------------ | ----------------------------- |
| `uploadSuccess`   | EventEmitter | File upload success event     |
| `uploadFail`      | EventEmitter | File upload failure event     |
| `removeSuccess`   | EventEmitter | File removal success event    |
| `validationError` | EventEmitter | File validation error event   |
| `fileAdded`       | EventEmitter | File added to queue event     |
| `fileRemoved`     | EventEmitter | File removed from queue event |

### FilePickerAdapter Interface

```typescript
export abstract class FilePickerAdapter {
  abstract uploadFile(fileItem: FilePreviewModel): Observable<UploadResponse>;
  abstract removeFile(fileItem: FilePreviewModel): Observable<any>;
}

export interface UploadResponse {
  body?: any;
  status: UploadStatus;
  progress?: number;
}

export enum UploadStatus {
  UPLOADED = "UPLOADED",
  IN_PROGRESS = "IN PROGRESS",
  ERROR = "ERROR",
}
```

### FilePreviewModel Interface

```typescript
export interface FilePreviewModel {
  fileId?: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileCategory: string;
  fileUrl?: string;
  file?: File;
  uploaded?: boolean;
  progress?: number;
  error?: string;
}
```

## 🎨 Customization

### Custom Templates

```html
<ngx-ntk-file-picker [adapter]="adapter">
  <!-- Custom dropzone template -->
  <ng-template #dropzoneTemplate>
    <div class="custom-dropzone">
      <i class="fas fa-cloud-upload-alt"></i>
      <h3>Drop files here or click to browse</h3>
    </div>
  </ng-template>

  <!-- Custom preview item template -->
  <ng-template #itemTemplate let-file>
    <div class="custom-preview-item">
      <img [src]="file.fileUrl" *ngIf="file.fileCategory === 'image'" />
      <div class="file-info">
        <span>{{ file.fileName }}</span>
        <span>{{ file.fileSize | fileSize }}</span>
      </div>
    </div>
  </ng-template>
</ngx-ntk-file-picker>
```

### Custom Styling

```scss
// Custom file picker styles
.ngx-ntk-file-picker {
  .dropzone {
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
      border-color: #4caf50;
      background-color: #e8f5e8;
    }
  }

  .preview-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 20px;
  }

  .preview-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .file-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 4px;
    }

    .file-info {
      margin-top: 8px;

      .file-name {
        font-weight: 500;
        color: #333;
        margin-bottom: 4px;
      }

      .file-size {
        font-size: 12px;
        color: #666;
      }
    }

    .progress-bar {
      margin-top: 8px;
      height: 4px;
      background-color: #e0e0e0;
      border-radius: 2px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background-color: #4caf50;
        transition: width 0.3s ease;
      }
    }
  }
}
```

## 🌐 Internationalization

### Custom Captions

```typescript
const persianCaptions: UploaderCaptions = {
  dropzone: {
    title: "فایل خود را اینجا رها کنید",
    or: "یا",
    browse: "انتخاب فایل",
  },
  cropper: {
    crop: "برش",
    cancel: "لغو",
  },
  previewCard: {
    remove: "حذف",
    uploadError: "خطا در آپلود",
  },
};
```

### Multi-language Setup

```typescript
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-file-upload",
  template: ` <ngx-ntk-file-picker [adapter]="adapter" [captions]="getCaptions()"> </ngx-ntk-file-picker> `,
})
export class FileUploadComponent {
  constructor(private translate: TranslateService) {}

  getCaptions() {
    const currentLang = this.translate.currentLang;

    return {
      dropzone: {
        title: this.translate.instant("filepicker.dropzone.title"),
        or: this.translate.instant("filepicker.dropzone.or"),
        browse: this.translate.instant("filepicker.dropzone.browse"),
      },
      cropper: {
        crop: this.translate.instant("filepicker.cropper.crop"),
        cancel: this.translate.instant("filepicker.cropper.cancel"),
      },
      previewCard: {
        remove: this.translate.instant("filepicker.previewCard.remove"),
        uploadError: this.translate.instant("filepicker.previewCard.uploadError"),
      },
    };
  }
}
```

## 🔒 Security

### File Validation

```typescript
// Custom validator function
customValidator = (file: File): Observable<boolean> => {
  return new Observable(observer => {
    // Check file type
    if (!this.isValidFileType(file.type)) {
      observer.next(false);
      observer.complete();
      return;
    }

    // Check file size
    if (file.size > this.maxFileSize * 1024 * 1024) {
      observer.next(false);
      observer.complete();
      return;
    }

    // Check file content (optional)
    this.validateFileContent(file).subscribe(
      isValid => {
        observer.next(isValid);
        observer.complete();
      },
      error => {
        observer.next(false);
        observer.complete();
      }
    );
  });
};

private isValidFileType(fileType: string): boolean {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  return allowedTypes.includes(fileType);
}

private validateFileContent(file: File): Observable<boolean> {
  // Implement content validation logic
  return of(true);
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FilePickerModule } from "ngx-ntk-file-picker";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("FileUploadComponent", () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilePickerModule, HttpClientTestingModule],
      declarations: [FileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should handle file upload success", () => {
    const mockFile = new File(["test"], "test.jpg", { type: "image/jpeg" });
    spyOn(component.uploadSuccess, "emit");

    component.onUploadSuccess({ file: mockFile, response: { success: true } });

    expect(component.uploadSuccess.emit).toHaveBeenCalled();
  });

  it("should validate file size correctly", () => {
    const mockFile = new File(["test"], "test.jpg", { type: "image/jpeg" });
    Object.defineProperty(mockFile, "size", { value: 1024 * 1024 }); // 1MB

    component.fileMaxSize = 5; // 5MB
    expect(component.validateFile(mockFile)).toBe(true);

    component.fileMaxSize = 0.5; // 500KB
    expect(component.validateFile(mockFile)).toBe(false);
  });
});
```

### Integration Tests

```typescript
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FilePickerModule } from "ngx-ntk-file-picker";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("FilePicker Integration", () => {
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilePickerModule, HttpClientTestingModule],
      declarations: [FileUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
  });

  it("should display dropzone when showDragDropZone is true", () => {
    fixture.componentInstance.showDragDropZone = true;
    fixture.detectChanges();

    const dropzone = fixture.nativeElement.querySelector(".dropzone");
    expect(dropzone).toBeTruthy();
  });

  it("should hide dropzone when showDragDropZone is false", () => {
    fixture.componentInstance.showDragDropZone = false;
    fixture.detectChanges();

    const dropzone = fixture.nativeElement.querySelector(".dropzone");
    expect(dropzone).toBeFalsy();
  });

  it("should accept only specified file types", () => {
    fixture.componentInstance.accept = "image/*";
    fixture.detectChanges();

    const fileInput = fixture.nativeElement.querySelector('input[type="file"]');
    expect(fileInput.accept).toBe("image/*");
  });
});
```

## ⚡ Performance

### Optimization Tips

```typescript
// Use OnPush change detection for better performance
@Component({
  selector: "app-file-upload",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {
  // Implement trackBy function for ngFor
  trackByFile(index: number, file: FilePreviewModel): string {
    return file.fileId || file.fileName;
  }

  // Use async pipe for observables
  uploadProgress$ = new BehaviorSubject<number>(0);

  // Implement proper cleanup
  ngOnDestroy(): void {
    this.uploadProgress$.complete();
  }
}
```

### Memory Management

```typescript
// Proper file cleanup
private cleanupFiles(): void {
  this.files.forEach(file => {
    if (file.fileUrl && file.fileUrl.startsWith('blob:')) {
      URL.revokeObjectURL(file.fileUrl);
    }
  });
}

// Cancel ongoing uploads
private cancelUploads(): void {
  this.uploadSubscriptions.forEach(sub => sub.unsubscribe());
  this.uploadSubscriptions = [];
}
```

## 📝 Examples

### Image Upload with Cropping

```typescript
@Component({
  selector: "app-image-upload",
  template: ` <ngx-ntk-file-picker [adapter]="imageAdapter" [enableCropper]="true" [accept]="'image/*'" [fileMaxSize]="10" [cropperOptions]="cropperConfig" (uploadSuccess)="onImageUploaded($event)"> </ngx-ntk-file-picker> `,
})
export class ImageUploadComponent {
  cropperConfig = {
    aspectRatio: 16 / 9,
    viewMode: 1,
    dragMode: "move",
    autoCropArea: 1,
    restore: false,
    guides: true,
    center: true,
    highlight: false,
    cropBoxMovable: true,
    cropBoxResizable: true,
    toggleDragModeOnDblclick: false,
  };

  onImageUploaded(file: FilePreviewModel): void {
    console.log("Image uploaded:", file.fileUrl);
  }
}
```

### Document Upload

```typescript
@Component({
  selector: "app-document-upload",
  template: ` <ngx-ntk-file-picker [adapter]="documentAdapter" [accept]="'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'" [fileExtensions]="['pdf', 'doc', 'docx']" [fileMaxSize]="20" [uploadType]="'multi'" [fileMaxCount]="5" (uploadSuccess)="onDocumentUploaded($event)"> </ngx-ntk-file-picker> `,
})
export class DocumentUploadComponent {
  onDocumentUploaded(file: FilePreviewModel): void {
    console.log("Document uploaded:", file.fileName);
  }
}
```

## 🔄 Version History

### v20.25.3

- Initial release with core functionality
- Drag & drop support
- File preview and validation
- Image cropping integration
- Multi-language support

### v20.25.2

- Bug fixes and performance improvements
- Enhanced error handling
- Improved accessibility features

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
