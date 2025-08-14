# NTK CMS Angular Libraries

مجموعه کاملی از کتابخانه‌های Angular برای سیستم مدیریت محتوا (CMS) که توسط تیم NTK توسعه داده شده است.

A comprehensive collection of Angular libraries for Content Management System (CMS) developed by NTK team.

## 📋 Table of Contents

- [Overview](#overview)
- [Libraries](#libraries)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Demo Application](#demo-application)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Internationalization](#internationalization)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project contains a collection of reusable Angular libraries and components designed for building modern CMS applications. Each library is built with TypeScript and follows Angular best practices.

## 📚 Libraries

### Core Libraries

#### 1. **ntk-cms-api** (v18.26.17)

**API and Model Library for TypeScript**

- Complete API service layer for CMS operations
- Comprehensive data models and DTOs
- Support for multiple modules: News, Blog, Catalog, Estate, Member, etc.
- Built-in authentication and authorization services
- RESTful API integration with RxJS

**Key Features:**

- Core services (Main, Log, Token)
- File management services
- Link management
- Universal menu system
- News and Blog management
- Catalog and Estate management
- Member and User management
- SMS and Payment services
- Ticketing system
- Web designer tools

#### 2. **ntk-cms-filemanager** (v18.26.5)

**Advanced File Management System**

- Tree-based file navigation
- Drag & drop file operations
- File preview and management
- Upload functionality with progress tracking
- Multi-language support
- Customizable UI components

**Components:**

- Folder content viewer
- Tree navigation
- Navigation bar
- Side view panel
- Upload component
- Loading overlay

#### 3. **ntk-cms-fileuploader** (v18.26.4)

**File Upload Component**

- Simple and efficient file upload functionality
- Progress tracking
- File validation
- Customizable upload interface

### UI Component Libraries

#### 4. **ngx-ntk-cron-editor** (v18.26.4)

**Cron Expression Editor**

- Visual cron job expression builder
- Time picker component
- Multi-language support
- Customizable cron options
- Real-time validation

**Features:**

- Intuitive cron expression creation
- Time picker with hour/minute selection
- Translation support (English, Persian, Russian)
- Customizable validation rules

#### 5. **ngx-ntk-file-picker** (v18.26.4)

**Advanced File Picker with Preview**

- Real-time progress bar
- File preview functionality
- Drag & drop support
- Custom templates
- Multi-language support
- Image cropping capabilities

**Features:**

- Multiple file selection
- File type validation
- Image preview with lightbox
- Customizable upload captions
- Responsive design

#### 6. **ngx-ntk-icon-picker** (v18.26.4)

**Icon Selection Component**

- FontAwesome icon integration
- PrimeIcons support
- Search and filter functionality
- Custom icon packs
- Modal-based selection

**Supported Icon Libraries:**

- FontAwesome 4, 5, 6
- PrimeIcons
- Custom icon packs

#### 7. **ngx-ntk-mat-color-picker** (v18.26.6)

**Material Design Color Picker**

- Angular Material integration
- Multiple color formats (HEX, RGB, HSL)
- Color palette presets
- Canvas-based color selection
- Numeric input support

**Components:**

- Color canvas picker
- Color palette
- Color collection
- Color toggle
- Numeric color input directive

#### 8. **ngx-ntk-query-builder** (v18.26.4)

**Visual Query Builder**

- Drag & drop query construction
- Multiple operator support
- Conditional logic building
- Export/import query definitions
- Multi-language interface

**Features:**

- Visual query construction
- Multiple data type support
- Complex condition building
- Query validation
- Export capabilities

#### 9. **ngx-ntk-smart-module** (v18.26.4)

**Smart Modal and Loader System**

- Dynamic modal management
- Smart loading indicators
- Auto-start functionality
- Customizable themes
- Stack-based modal system

**Components:**

- Smart Modal Service
- Smart Loader Service
- Modal stack management
- Loading overlay system

## 🚀 Installation

### Prerequisites

- Node.js (LTS version)
- Angular CLI (^16.0.0)
- Angular (^16.0.0)

### Install Dependencies

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

## ⚡ Quick Start

### 1. Import Modules

```typescript
import { NtkCmsApiModule } from "ntk-cms-api";
import { NtkCmsFilemanagerModule } from "ntk-cms-filemanager";
import { NtkCmsFileuploaderModule } from "ntk-cms-fileuploader";
import { NgxNtkCronEditorModule } from "ngx-ntk-cron-editor";
import { NgxNtkFilePickerModule } from "ngx-ntk-file-picker";
import { NgxNtkIconPickerModule } from "ngx-ntk-icon-picker";
import { NgxNtkMatColorPickerModule } from "ngx-ntk-mat-color-picker";
import { NgxNtkQueryBuilderModule } from "ngx-ntk-query-builder";
import { NtkSmartModalModule, NtkSmartLoaderModule } from "ngx-ntk-smart-module";

@NgModule({
  imports: [NtkCmsApiModule, NtkCmsFilemanagerModule, NtkCmsFileuploaderModule, NgxNtkCronEditorModule, NgxNtkFilePickerModule, NgxNtkIconPickerModule, NgxNtkMatColorPickerModule, NgxNtkQueryBuilderModule, NtkSmartModalModule, NtkSmartLoaderModule],
})
export class AppModule {}
```

### 2. Basic Usage Examples

#### File Manager

```html
<ntk-cms-filemanager [apiUrl]="'https://api.example.com'" [token]="'your-auth-token'"> </ntk-cms-filemanager>
```

#### File Uploader

```html
<ntk-cms-fileuploader [apiUrl]="'https://api.example.com/upload'" [maxFileSize]="5242880"> </ntk-cms-fileuploader>
```

#### Cron Editor

```html
<ngx-ntk-cron-editor [(cronExpression)]="cronExpression" [options]="cronOptions"> </ngx-ntk-cron-editor>
```

#### Color Picker

```html
<ngx-ntk-mat-color-picker [(color)]="selectedColor" [format]="'hex'"> </ngx-ntk-mat-color-picker>
```

#### Icon Picker

```html
<ngx-ntk-icon-picker [(icon)]="selectedIcon" [iconPack]="'fontawesome'"> </ngx-ntk-icon-picker>
```

## 🎮 Demo Application

This project includes a comprehensive demo application showcasing all libraries:

### Running the Demo

```bash
# Start development server
npm start

# Navigate to demo pages
http://localhost:4200/
```

### Demo Pages

- **API Test**: `/apiTest` - API service demonstrations
- **File Manager Test**: `/filemanagerTest` - File management system
- **File Uploader Test**: `/fileuploaderTest` - File upload functionality
- **Cron Editor Test**: `/cronEditTest` - Cron expression builder
- **Color Picker Test**: `/ColorPicker` - Color selection component
- **Icon Picker Test**: `/iconPicker` - Icon selection interface
- **Smart Loader Test**: `/smartLoaderTest` - Loading system
- **Smart Modal Test**: `/smartModalTest` - Modal management
- **Query Builder Test**: `/test` - Query construction tool

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

### Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run e2e

# Run linting
npm run lint
```

### Build Production

```bash
# Build demo application for production
ng build --prod

# Build individual libraries for production
ng build ntk-cms-api --prod
ng build ntk-cms-filemanager --prod
# ... etc for other libraries
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
└── e2e/                         # End-to-end tests
```

## 🌐 Internationalization

All libraries support multiple languages:

- English (en)
- Persian/Farsi (fa)
- French (fr)
- Russian (ru)

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
// Configure API services
import { NtkCmsApiService } from 'ntk-cms-api';

constructor(private apiService: NtkCmsApiService) {
  this.apiService.setApiUrl('https://api.example.com');
  this.apiService.setToken('your-auth-token');
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow Angular style guide
- Write unit tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alireza Karavi**

- GitHub: [@akaravi](https://github.com/akaravi)
- Website: [ntk.ir](https://ntk.ir)

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact: [ntk.ir](https://ntk.ir)
- Documentation: Check individual library README files

---

**Note**: This is a comprehensive Angular library collection designed for building modern CMS applications. Each library is independently versioned and can be used separately or together as needed.
