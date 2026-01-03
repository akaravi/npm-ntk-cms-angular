# NTK CMS Angular Libraries

<div align="center">

![Angular](https://img.shields.io/badge/Angular-21.0.0-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![npm](https://img.shields.io/npm/v/ngx-ntk-icon-picker)

**مجموعه کاملی از کتابخانه‌های Angular برای سیستم مدیریت محتوا (CMS)**

**A comprehensive collection of Angular libraries for Content Management System (CMS)**

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Support](#-support)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Libraries](#-libraries)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Angular Compatibility](#-angular-compatibility)
- [Documentation](#-documentation)
- [Demo Application](#-demo-application)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🎯 Overview

This monorepo contains a collection of **9 reusable Angular libraries** designed for building modern CMS applications. Each library is:

- ✅ **Standalone** - Can be used independently
- ✅ **TypeScript** - Fully typed with TypeScript
- ✅ **Angular 20 & 21** - Compatible with Angular 20.1.0+ and 21.0.0+
- ✅ **Well Documented** - Comprehensive documentation for each library
- ✅ **Production Ready** - Tested and optimized for production use
- ✅ **Multi-language** - Built-in internationalization support

## ✨ Features

- 🚀 **Modern Angular** - Built with Angular 20/21 best practices
- 📦 **Modular Architecture** - Use only what you need
- 🎨 **Customizable** - Flexible styling and theming options
- 🌐 **i18n Ready** - Multi-language support (English, Persian, French, Russian)
- ♿ **Accessible** - ARIA support and keyboard navigation
- 📱 **Responsive** - Mobile-friendly components
- 🔒 **Type Safe** - Full TypeScript support
- ⚡ **Performance** - Optimized for speed and efficiency

## 📚 Libraries

### Core Libraries

#### 1. [**ntk-cms-api**](projects/ntk-cms-api/README.md) (v20.26.1)

**Complete API service layer and data models for CMS operations**

[📖 Full Documentation](projects/ntk-cms-api/README.md) • [📦 npm](https://www.npmjs.com/package/ntk-cms-api)

**Key Features:**

- Complete API service layer for CMS operations
- Comprehensive data models and DTOs
- Support for multiple modules: News, Blog, Catalog, Estate, Member, etc.
- Built-in authentication and authorization services
- RESTful API integration with RxJS

**Installation:**

```bash
npm install ntk-cms-api
```

---

#### 2. [**ntk-cms-filemanager**](projects/ntk-cms-filemanager/README.md) (v20.26.2)

**Advanced file management system with tree-based navigation**

[📖 Full Documentation](projects/ntk-cms-filemanager/README.md) • [📦 npm](https://www.npmjs.com/package/ntk-cms-filemanager)

**Key Features:**

- Tree-based file navigation
- Drag & drop file operations
- File preview and management
- Upload functionality with progress tracking
- Multi-language support
- Customizable UI components

**Installation:**

```bash
npm install ntk-cms-filemanager
```

---

#### 3. [**ntk-cms-fileuploader**](projects/ntk-cms-fileuploader/README.md) (v20.26.2)

**Simple and efficient file upload component**

[📖 Full Documentation](projects/ntk-cms-fileuploader/README.md) • [📦 npm](https://www.npmjs.com/package/ntk-cms-fileuploader)

**Key Features:**

- Simple and efficient file upload functionality
- Progress tracking
- File validation
- Customizable upload interface
- Drag & drop support

**Installation:**

```bash
npm install ntk-cms-fileuploader
```

---

### UI Component Libraries

#### 4. [**ngx-ntk-cron-editor**](projects/ngx-ntk-cron-editor/README.md) (v20.26.2)

**Visual cron expression builder with time picker**

[📖 Full Documentation](projects/ngx-ntk-cron-editor/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-cron-editor)

**Key Features:**

- Visual cron job expression builder
- Time picker component
- Multi-language support
- Customizable cron options
- Real-time validation

**Installation:**

```bash
npm install ngx-ntk-cron-editor
```

---

#### 5. [**ngx-ntk-file-picker**](projects/ngx-ntk-file-picker/README.md) (v20.26.2)

**Advanced file picker with preview and drag & drop**

[📖 Full Documentation](projects/ngx-ntk-file-picker/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-file-picker)

**Key Features:**

- Real-time progress bar
- File preview functionality
- Drag & drop support
- Custom templates
- Multi-language support
- Image cropping capabilities

**Installation:**

```bash
npm install ngx-ntk-file-picker
```

---

#### 6. [**ngx-ntk-icon-picker**](projects/ngx-ntk-icon-picker/README.md) (v20.26.1)

**Icon selection component with multiple icon libraries**

[📖 Full Documentation](projects/ngx-ntk-icon-picker/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-icon-picker)

**Key Features:**

- FontAwesome 4, 5, 6 support
- Material Icons support
- PrimeIcons support
- Search and filter functionality
- Custom icon packs
- Modal-based selection

**Installation:**

```bash
npm install ngx-ntk-icon-picker
npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons primeicons
```

---

#### 7. [**ngx-ntk-mat-color-picker**](projects/ngx-ntk-mat-color-picker/README.md) (v20.26.2)

**Material Design color picker component**

[📖 Full Documentation](projects/ngx-ntk-mat-color-picker/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-mat-color-picker)

**Key Features:**

- Angular Material integration
- Multiple color formats (HEX, RGB, HSL)
- Color palette presets
- Canvas-based color selection
- Numeric input support

**Installation:**

```bash
npm install ngx-ntk-mat-color-picker
npm install @angular/material @angular/forms @angular/cdk
```

---

#### 8. [**ngx-ntk-query-builder**](projects/ngx-ntk-query-builder/README.md) (v20.26.2)

**Visual query builder for complex database queries**

[📖 Full Documentation](projects/ngx-ntk-query-builder/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-query-builder)

**Key Features:**

- Drag & drop query construction
- Multiple operator support
- Conditional logic building
- Export/import query definitions
- Multi-language interface

**Installation:**

```bash
npm install ngx-ntk-query-builder
npm install @ngx-translate/core @ngx-translate/http-loader
```

---

#### 9. [**ngx-ntk-smart-module**](projects/ngx-ntk-smart-module/README.md) (v20.26.2)

**Smart modal and loader system**

[📖 Full Documentation](projects/ngx-ntk-smart-module/README.md) • [📦 npm](https://www.npmjs.com/package/ngx-ntk-smart-module)

**Key Features:**

- Dynamic modal management
- Smart loading indicators
- Auto-start functionality
- Customizable themes
- Stack-based modal system

**Installation:**

```bash
npm install ngx-ntk-smart-module
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (LTS version recommended)
- **Angular CLI** (^20.0.0 or ^21.0.0)
- **Angular** (^20.1.0 or ^21.0.0)

### Install All Dependencies

```bash
npm install
```

### Install Individual Libraries

```bash
# Core API
npm install ntk-cms-api

# File Management
npm install ntk-cms-filemanager
npm install ntk-cms-fileuploader

# UI Components
npm install ngx-ntk-cron-editor
npm install ngx-ntk-file-picker
npm install ngx-ntk-icon-picker
npm install ngx-ntk-mat-color-picker
npm install ngx-ntk-query-builder
npm install ngx-ntk-smart-module
```

### Install with Legacy Peer Dependencies (Angular 20)

If you're using Angular 20 and encounter peer dependency conflicts:

```bash
npm install ngx-ntk-icon-picker --legacy-peer-deps
```

## ⚡ Quick Start

### 1. Import Modules (Standalone Components)

```typescript
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconPickerModule } from "ngx-ntk-icon-picker";
import { FilePickerModule } from "ngx-ntk-file-picker";
import { NtkCmsApiModule } from "ntk-cms-api";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, IconPickerModule, FilePickerModule, NtkCmsApiModule],
  template: `...`,
})
export class AppComponent {}
```

### 2. Basic Usage Examples

#### Icon Picker

```html
<input type="text" [iconPicker]="selectedIcon" [ipIconPack]="['fa6']" [ipPosition]="'bottom'" [ipWidth]="'500px'" [ipPlaceHolder]="'Choose an icon'" (iconPickerSelect)="onIconSelect($event)" />
```

#### File Picker

```html
<file-picker [config]="filePickerConfig" (onUpload)="onFileUpload($event)"> </file-picker>
```

#### Cron Editor

```html
<ngx-ntk-cron-editor [(cronExpression)]="cronExpression" [options]="cronOptions"> </ngx-ntk-cron-editor>
```

#### Color Picker

```html
<ngx-mat-color-picker [(color)]="selectedColor" [format]="'hex'"> </ngx-mat-color-picker>
```

## 🔄 Angular Compatibility

All libraries support both **Angular 20** and **Angular 21**:

| Library                  | Angular 20 | Angular 21 |
| ------------------------ | ---------- | ---------- |
| ntk-cms-api              | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ntk-cms-filemanager      | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ntk-cms-fileuploader     | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-cron-editor      | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-file-picker      | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-icon-picker      | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-mat-color-picker | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-query-builder    | ✅ ^20.1.0 | ✅ ^21.0.0 |
| ngx-ntk-smart-module     | ✅ ^20.1.0 | ✅ ^21.0.0 |

## 📖 Documentation

Each library has comprehensive documentation:

- [**ntk-cms-api**](projects/ntk-cms-api/README.md) - API services and models
- [**ntk-cms-filemanager**](projects/ntk-cms-filemanager/README.md) - File management system
- [**ntk-cms-fileuploader**](projects/ntk-cms-fileuploader/README.md) - File upload component
- [**ngx-ntk-cron-editor**](projects/ngx-ntk-cron-editor/README.md) - Cron expression editor
- [**ngx-ntk-file-picker**](projects/ngx-ntk-file-picker/README.md) - Advanced file picker
- [**ngx-ntk-icon-picker**](projects/ngx-ntk-icon-picker/README.md) - Icon selection component
- [**ngx-ntk-mat-color-picker**](projects/ngx-ntk-mat-color-picker/README.md) - Material color picker
- [**ngx-ntk-query-builder**](projects/ngx-ntk-query-builder/README.md) - Visual query builder
- [**ngx-ntk-smart-module**](projects/ngx-ntk-smart-module/README.md) - Modal and loader system

## 🎮 Demo Application

This project includes a comprehensive demo application showcasing all libraries.

### Running the Demo

```bash
# Install dependencies
npm install

# Start development server
npm start

# Navigate to http://localhost:4200
```

### Demo Pages

- **API Test** (`/apiTest`) - API service demonstrations
- **File Manager Test** (`/filemanagerTest`) - File management system
- **File Uploader Test** (`/fileuploaderTest`) - File upload functionality
- **Cron Editor Test** (`/cronEditTest`) - Cron expression builder
- **Color Picker Test** (`/ColorPicker`) - Color selection component
- **Icon Picker Test** (`/IconPicker`) - Icon selection interface
- **Smart Loader Test** (`/smartLoaderTest`) - Loading system
- **Smart Modal Test** (`/smartModalTest`) - Modal management
- **Query Builder Test** (`/test`) - Query construction tool

## 🛠 Development

### Build All Libraries

```bash
# Build all libraries
ng build ntk-cms-api
ng build ntk-cms-filemanager
ng build ntk-cms-fileuploader
ng build ngx-ntk-cron-editor
ng build ngx-ntk-file-picker
ng build ngx-ntk-icon-picker
ng build ngx-ntk-mat-color-picker
ng build ngx-ntk-query-builder
ng build ngx-ntk-smart-module
```

### Build Demo Application

```bash
# Development build
npm run build

# Production build
ng build --configuration production
```

### Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run e2e

# Run linting
npm run lint
```

## 📦 Project Structure

```
npm-ntk-cms-angular/
├── projects/
│   ├── ntk-cms-api/              # Core API services and models
│   ├── ntk-cms-filemanager/      # File management system
│   ├── ntk-cms-fileuploader/     # File upload component
│   ├── ngx-ntk-cron-editor/      # Cron expression editor
│   ├── ngx-ntk-file-picker/      # Advanced file picker
│   ├── ngx-ntk-icon-picker/      # Icon selection component
│   ├── ngx-ntk-mat-color-picker/ # Material color picker
│   ├── ngx-ntk-query-builder/    # Visual query builder
│   └── ngx-ntk-smart-module/     # Modal and loader system
├── src/
│   └── app/
│       └── pages/                # Demo pages for each library
├── dist/                         # Built libraries
└── e2e/                         # End-to-end tests
```

## 🌐 Internationalization

All libraries support multiple languages:

- **English** (en)
- **Persian/Farsi** (fa)
- **French** (fr)
- **Russian** (ru)

Translation files are included in each library's assets folder.

## 🔧 Configuration

### Environment Setup

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: "https://api.example.com",
  fileManagerUrl: "https://files.example.com",
  uploadUrl: "https://upload.example.com",
};
```

### API Configuration

```typescript
import { NtkCmsApiService } from 'ntk-cms-api';

constructor(private apiService: NtkCmsApiService) {
  this.apiService.setApiUrl('https://api.example.com');
  this.apiService.setToken('your-auth-token');
}
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow [Angular Style Guide](https://angular.io/guide/styleguide)
- Write unit tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting PR
- Use conventional commit messages

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alireza Karavi**

- 🌐 Website: [ntk.ir](https://ntk.ir)
- 📧 Contact: [GitHub Issues](https://github.com/akaravi/npm-ntk-cms-angular/issues)
- 💼 GitHub: [@akaravi](https://github.com/akaravi)

## 🆘 Support

For support and questions:

- 📝 **Create an issue** on [GitHub](https://github.com/akaravi/npm-ntk-cms-angular/issues)
- 📚 **Check documentation** - Each library has detailed README
- 💬 **Contact** - [ntk.ir](https://ntk.ir)

## 📊 Statistics

- **9 Libraries** - Complete CMS solution
- **Angular 20 & 21** - Latest Angular versions
- **TypeScript** - Fully typed
- **Multi-language** - 4 languages supported
- **Production Ready** - Tested and optimized

---

<div align="center">

**Made with ❤️ by [NTK Team](https://ntk.ir)**

[⭐ Star us on GitHub](https://github.com/akaravi/npm-ntk-cms-angular) • [📦 npm packages](https://www.npmjs.com/~akaravi) • [🐛 Report Bug](https://github.com/akaravi/npm-ntk-cms-angular/issues) • [💡 Request Feature](https://github.com/akaravi/npm-ntk-cms-angular/issues)

</div>
