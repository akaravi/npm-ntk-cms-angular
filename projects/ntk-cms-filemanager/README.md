# NTK CMS File Manager

**ntk-cms-filemanager** - Advanced file management system with tree-based navigation and multi-language support

## 📋 Overview

The NTK CMS File Manager is a comprehensive file management component that provides tree-based file navigation, drag & drop operations, file preview, and multi-language support. It's designed for modern web applications that require robust file management capabilities.

## 🚀 Installation

```bash
npm install ntk-cms-filemanager
```

## 📦 Features

### Core Features

- **Tree-based Navigation** - Hierarchical file and folder structure
- **Drag & Drop Operations** - Intuitive file management
- **File Preview** - Preview files before operations
- **Multi-language Support** - English, Persian, French, Russian
- **Upload Progress Tracking** - Real-time upload status
- **File Validation** - Type and size validation
- **Customizable UI** - Theme and style customization

### Components

- **Folder Content Viewer** - Display folder contents
- **Tree Navigation** - Hierarchical file tree
- **Navigation Bar** - Breadcrumb navigation
- **Side View Panel** - Additional file information
- **Upload Component** - File upload interface
- **Loading Overlay** - Loading indicators

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NtkCmsFilemanagerModule } from "ntk-cms-filemanager";

@NgModule({
  imports: [HttpClientModule, NtkCmsFilemanagerModule],
})
export class AppModule {}
```

### Basic Implementation

```html
<ntk-cms-filemanager [apiUrl]="'https://api.example.com'" [token]="'your-auth-token'" [language]="'fa'" [showTree]="true" [showToolbar]="true"> </ntk-cms-filemanager>
```

### Advanced Configuration

```typescript
import { Component } from "@angular/core";
import { TranslateUiService } from "ntk-cms-filemanager";

export class FileManagerComponent {
  fileManagerConfig = {
    apiUrl: "https://api.example.com",
    token: "your-auth-token",
    language: "fa",
    showTree: true,
    showToolbar: true,
    allowUpload: true,
    allowDelete: true,
    allowRename: true,
    maxFileSize: 5242880, // 5MB
    allowedFileTypes: ["image/*", "application/pdf"],
  };

  constructor(private translateUiService: TranslateUiService) {
    // Initialize translations
    this.translateUiService.init();
    this.translateUiService.setLanguage("fa");
  }

  onFileSelected(event: any): void {
    console.log("File selected:", event);
  }

  onFolderSelected(event: any): void {
    console.log("Folder selected:", event);
  }

  onUploadComplete(event: any): void {
    console.log("Upload complete:", event);
  }
}
```

## 📚 API Reference

### Input Properties

| Property           | Type     | Default | Description             |
| ------------------ | -------- | ------- | ----------------------- |
| `apiUrl`           | string   | -       | API endpoint URL        |
| `token`            | string   | -       | Authentication token    |
| `language`         | string   | 'en'    | Interface language      |
| `showTree`         | boolean  | true    | Show file tree          |
| `showToolbar`      | boolean  | true    | Show toolbar            |
| `allowUpload`      | boolean  | true    | Allow file upload       |
| `allowDelete`      | boolean  | true    | Allow file deletion     |
| `allowRename`      | boolean  | true    | Allow file renaming     |
| `maxFileSize`      | number   | 5242880 | Maximum file size (5MB) |
| `allowedFileTypes` | string[] | []      | Allowed file types      |

### Output Events

| Event            | Type         | Description               |
| ---------------- | ------------ | ------------------------- |
| `fileSelected`   | EventEmitter | File selection event      |
| `folderSelected` | EventEmitter | Folder selection event    |
| `uploadComplete` | EventEmitter | Upload completion event   |
| `deleteComplete` | EventEmitter | Deletion completion event |
| `renameComplete` | EventEmitter | Rename completion event   |

### Service Methods

#### NodeService

```typescript
// Get folder contents
getFolderContents(path: string): Observable<any>

// Create new folder
createFolder(name: string, path: string): Observable<any>

// Delete file/folder
deleteItem(path: string): Observable<any>

// Rename file/folder
renameItem(oldPath: string, newName: string): Observable<any>
```

#### NodeClickedService

```typescript
// Handle file click
onFileClick(file: any): void

// Handle folder click
onFolderClick(folder: any): void

// Search files
searchForString(query: string): void
```

## 🌐 Internationalization

The file manager supports multiple languages:

### Supported Languages

- **English (en)** - Default language
- **Persian/Farsi (fa)** - فارسی
- **French (fr)** - Français
- **Russian (ru)** - Русский

### Translation Setup

```typescript
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { TranslateUiService } from "ntk-cms-filemanager";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/ntk-cms-filemanager/", ".json");
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
  providers: [TranslateUiService],
})
export class AppModule {}
```

### Translation Keys

```json
{
  "filemanager": {
    "cancel": "Cancel",
    "close": "Close",
    "confirm": "Confirm",
    "create_new_folder": "Create New Folder",
    "delete": "Delete",
    "download": "Download",
    "file_name": "File Name",
    "folder_name": "Folder Name",
    "upload": "Upload",
    "search": "Search",
    "rename": "Rename"
  }
}
```

## 🎨 Customization

### Custom Styling

```scss
// Custom file manager styles
.ntk-cms-filemanager {
  .file-tree {
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  .file-item {
    &:hover {
      background-color: #e3f2fd;
    }

    &.selected {
      background-color: #2196f3;
      color: white;
    }
  }

  .upload-zone {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;

    &.drag-over {
      border-color: #2196f3;
      background-color: #e3f2fd;
    }
  }
}
```

### Custom Templates

```html
<ntk-cms-filemanager [config]="fileManagerConfig">
  <!-- Custom file item template -->
  <ng-template #fileItemTemplate let-file>
    <div class="custom-file-item">
      <i class="file-icon" [class]="getFileIcon(file.type)"></i>
      <span class="file-name">{{ file.name }}</span>
      <span class="file-size">{{ file.size | fileSize }}</span>
    </div>
  </ng-template>

  <!-- Custom toolbar template -->
  <ng-template #toolbarTemplate>
    <div class="custom-toolbar">
      <button (click)="refreshFiles()">Refresh</button>
      <button (click)="createFolder()">New Folder</button>
      <button (click)="uploadFiles()">Upload</button>
    </div>
  </ng-template>
</ntk-cms-filemanager>
```

## 🔐 Security

### File Validation

```typescript
export class FileManagerComponent {
  validateFile(file: File): boolean {
    // Check file size
    if (file.size > this.maxFileSize) {
      this.showError("File size exceeds limit");
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
        this.showError("File type not allowed");
        return false;
      }
    }

    return true;
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
import { NtkCmsFilemanagerModule } from "ntk-cms-filemanager";

describe("FileManagerComponent", () => {
  let component: FileManagerComponent;
  let fixture: ComponentFixture<FileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NtkCmsFilemanagerModule],
      declarations: [FileManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize with default configuration", () => {
    expect(component.config.language).toBe("en");
    expect(component.config.showTree).toBe(true);
  });

  it("should handle file selection", () => {
    const mockFile = { name: "test.txt", type: "text/plain" };
    spyOn(component.fileSelected, "emit");

    component.onFileSelected(mockFile);

    expect(component.fileSelected.emit).toHaveBeenCalledWith(mockFile);
  });
});
```

## 📊 Performance

### Optimization Tips

1. **Lazy Loading**: Load file tree nodes on demand
2. **Virtual Scrolling**: Use virtual scrolling for large file lists
3. **Caching**: Cache file metadata and thumbnails
4. **Compression**: Compress file transfers when possible
5. **Pagination**: Implement pagination for large directories

### Memory Management

```typescript
export class FileManagerComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // Subscribe to observables with takeUntil
    this.fileService
      .getFiles()
      .pipe(takeUntil(this.destroy$))
      .subscribe((files) => {
        this.files = files;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

## 🔄 Version History

### v18.26.5

- Enhanced multi-language support
- Improved drag & drop functionality
- Added file preview capabilities
- Bug fixes and performance improvements

### v18.26.4

- Initial release with core functionality
- Tree-based navigation
- Basic file operations
- Multi-language interface

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
