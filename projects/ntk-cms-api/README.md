# NTK CMS API Library

<div align="center">

![Angular](https://img.shields.io/badge/Angular-20%20%7C%2021-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.0-blue.svg)
![License](https://img.shields.io/badge/License-ISC-green.svg)
![npm](https://img.shields.io/npm/v/ntk-cms-api)

**Complete API service layer and data models for CMS operations**

[Installation](#-installation) • [Usage](#-usage) • [API Reference](#-api-reference) • [Examples](#-examples)

</div>

---

**ntk-cms-api** - Complete API service layer and data models for CMS operations

## 📋 Overview

The NTK CMS API library provides a comprehensive set of services, models, and utilities for building Content Management System applications. It includes complete API integration, data models, and business logic for various CMS modules.

## 🚀 Installation

```bash
npm install ntk-cms-api
```

## 📦 Features

### Core Services

- **Main Service** - Core API operations and configuration
- **Log Service** - Logging and error handling
- **Token Service** - Authentication and authorization
- **File Service** - File management operations
- **Link Service** - Link management and routing

### Content Management

- **News Service** - News article management
- **Blog Service** - Blog post management
- **Catalog Service** - Product catalog management
- **Estate Service** - Real estate management
- **Member Service** - User and member management

### Additional Services

- **SMS Service** - SMS notifications
- **Payment Service** - Payment processing
- **Ticketing Service** - Support ticket system
- **Web Designer Service** - Website builder tools

## 🔧 Usage

### Basic Setup

```typescript
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NtkCmsApiModule } from "ntk-cms-api";

@NgModule({
  imports: [HttpClientModule, NtkCmsApiModule],
})
export class AppModule {}
```

### Configure API

```typescript
import { NtkCmsApiService } from "ntk-cms-api";

export class AppComponent {
  constructor(private apiService: NtkCmsApiService) {
    // Set API configuration
    this.apiService.setApiUrl("https://api.example.com");
    this.apiService.setToken("your-auth-token");
  }
}
```

### Using Services

```typescript
import { NewsService, NewsModel } from "ntk-cms-api";

export class NewsComponent {
  constructor(private newsService: NewsService) {}

  async getNews(): Promise<NewsModel[]> {
    try {
      const result = await this.newsService.ServiceGetAll().toPromise();
      return result.listItems || [];
    } catch (error) {
      console.error("Error fetching news:", error);
      return [];
    }
  }

  async createNews(news: NewsModel): Promise<boolean> {
    try {
      const result = await this.newsService.ServiceAdd(news).toPromise();
      return result.isSuccess;
    } catch (error) {
      console.error("Error creating news:", error);
      return false;
    }
  }
}
```

## 📚 API Reference

### Core Models

#### NewsModel

```typescript
interface NewsModel {
  id?: string;
  title: string;
  description?: string;
  body?: string;
  linkMainImageId?: number;
  linkMainImageIdSrc?: string;
  createdDate?: Date;
  updatedDate?: Date;
  // ... other properties
}
```

#### BlogModel

```typescript
interface BlogModel {
  id?: string;
  title: string;
  description?: string;
  body?: string;
  linkMainImageId?: number;
  linkMainImageIdSrc?: string;
  createdDate?: Date;
  updatedDate?: Date;
  // ... other properties
}
```

### Service Methods

#### NewsService

- `ServiceGetAll()` - Get all news articles
- `ServiceGetById(id: string)` - Get news by ID
- `ServiceAdd(model: NewsModel)` - Create new news
- `ServiceEdit(model: NewsModel)` - Update news
- `ServiceDelete(id: string)` - Delete news

#### BlogService

- `ServiceGetAll()` - Get all blog posts
- `ServiceGetById(id: string)` - Get blog by ID
- `ServiceAdd(model: BlogModel)` - Create new blog
- `ServiceEdit(model: BlogModel)` - Update blog
- `ServiceDelete(id: string)` - Delete blog

## 🔐 Authentication

### Token Management


## 📁 File Management

### File Operations

```typescript
import { FileService, FileModel } from "ntk-cms-api";

export class FileComponent {
  constructor(private fileService: FileService) {}

  async uploadFile(file: File): Promise<FileModel | null> {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const result = await this.fileService.ServiceUploadFile(formData).toPromise();
      return result.isSuccess ? result.item : null;
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  }

  async getFiles(): Promise<FileModel[]> {
    try {
      const result = await this.fileService.ServiceGetAll().toPromise();
      return result.listItems || [];
    } catch (error) {
      console.error("Error fetching files:", error);
      return [];
    }
  }
}
```

## 🌐 Internationalization

The API library supports multiple languages through the translation service:

```typescript
import { TranslateService } from "ntk-cms-api";

export class AppComponent {
  constructor(private translateService: TranslateService) {
    // Set default language
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");
  }

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
```

## 🔧 Configuration

### Environment Setup

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: "https://api.example.com",
  apiVersion: "v1",
  timeout: 30000,
};
```

### Service Configuration

```typescript
import { NtkCmsApiService } from "ntk-cms-api";

export class AppComponent {
  constructor(private apiService: NtkCmsApiService) {
    // Configure API service
    this.apiService.setApiUrl(environment.apiUrl);
    this.apiService.setTimeout(environment.timeout);

    // Set default headers
    this.apiService.setDefaultHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
  }
}
```

## 🧪 Testing

### Unit Tests

```typescript
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NewsService } from "ntk-cms-api";

describe("NewsService", () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService],
    });
    service = TestBed.inject(NewsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should fetch news articles", async () => {
    const result = await service.ServiceGetAll().toPromise();
    expect(result).toBeDefined();
  });
});
```

## 📊 Error Handling

### Global Error Handler

```typescript
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NtkCmsApiService } from "ntk-cms-api";

@Injectable()
export class GlobalErrorHandler {
  constructor(private apiService: NtkCmsApiService) {}

  handleError(error: HttpErrorResponse): void {
    if (error.status === 401) {
      // Handle unauthorized access
      this.handleUnauthorized();
    } else if (error.status === 403) {
      // Handle forbidden access
      this.handleForbidden();
    } else {
      // Handle other errors
      console.error("API Error:", error);
    }
  }



  private handleForbidden(): void {
    // Handle forbidden access
    console.error("Access forbidden");
  }
}
```

## 🔄 Version History

### v18.26.17

- Enhanced API services and models
- Improved error handling
- Added new content management features
- Updated TypeScript definitions

### v18.26.16

- Bug fixes and performance improvements
- Added new service methods
- Enhanced authentication system

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
npm install ntk-cms-api
```

**Package:** [npmjs.com/package/ntk-cms-api](https://www.npmjs.com/package/ntk-cms-api)

## 🔗 Related Libraries

This library is part of the **NTK CMS Angular Libraries** collection:

- [ntk-cms-filemanager](../../README.md#2-ntk-cms-filemanager-v20262) - File management system
- [ntk-cms-fileuploader](../../README.md#3-ntk-cms-fileuploader-v20262) - File upload component
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

[⭐ Star us on GitHub](https://github.com/akaravi/npm-ntk-cms-angular) • [📦 View on npm](https://www.npmjs.com/package/ntk-cms-api)

</div>
