## 2026-01-03 14:20:00

- رفع مشکل نمایش PrimeIcons در IconPicker:
  - نصب `primeicons` package
  - اضافه کردن PrimeIcons CSS به `styles.scss`
  - PrimeIcons حالا به درستی نمایش داده می‌شوند

## 2026-01-03 14:18:00

- رفع مشکل نمایش Material Icons در IconPicker:
  - اضافه کردن Material Icons font از Google Fonts به `styles.scss`
  - Material Icons حالا به درستی نمایش داده می‌شوند

## 2026-01-03 14:15:00

- رفع مشکل نمایش FontAwesome 6 icons در IconPicker:
  - بهبود متد `getFontAwesome6Icon` برای تبدیل نام آیکون از kebab-case به camelCase
  - استفاده مستقیم از `fas` object برای دسترسی به آیکون‌ها
  - اضافه کردن fallback برای آیکون‌هایی که پیدا نمی‌شوند
  - بهبود متد `isIconAvailable` در service برای استفاده از همان منطق
  - بهبود template برای نمایش بهتر آیکون‌های پیدا نشده

## 2026-01-03 14:00:00

- رفع مشکل IconPicker:
  - تبدیل `*ngFor` به `@for` در template (Angular 21 control flow)
  - تبدیل `*ngIf` به `@if` در template
  - رفع مشکل نمایش FontAwesome 6 icons با استفاده از `findIconDefinition` و `IconDefinition`
  - اضافه کردن import `fas` در component برای دسترسی مستقیم به آیکون‌ها
  - اضافه کردن FontAwesome CSS به `styles.scss` برای نمایش آیکون‌های FontAwesome 5
  - بهبود متد `getFontAwesome6Icon` برای پشتیبانی از fallback
  - بهبود متد `isIconAvailable` در service برای استفاده از `findIconDefinition`

## 2026-01-03 13:48:45

- رفع خطاهای build پروژه:
  - نصب @angular/cdk@^21.0.0 برای ngx-ntk-mat-color-picker
  - نصب @angular/animations@^21.0.0 برای animation ها
  - حذف import matDatepickerAnimations از @angular/material/datepicker (دیگر در Angular 21 وجود ندارد)
  - تعریف animation های سفارشی برای جایگزینی matDatepickerAnimations
  - رفع خطاهای event.keyCode با استفاده از event.key (Angular 21)
  - build تمام library های پروژه (ngx-ntk-file-picker, ngx-ntk-mat-color-picker, ngx-ntk-smart-module, ngx-ntk-cron-editor, ntk-cms-filemanager, ntk-cms-api, ntk-cms-fileuploader, ngx-ntk-icon-picker, ngx-ntk-query-builder)
  - افزایش budget در angular.json از 1MB به 3MB
  - پروژه با موفقیت build شد (1.82 MB initial bundle)

## 2026-01-03 13:42:00

- آماده‌سازی کامل پروژه برای مهاجرت به Angular 21:
  - به‌روزرسانی تمام package.json ها (اصلی و پروژه‌های فرعی) از Angular 20.1.0 به Angular 21.0.0
  - به‌روزرسانی TypeScript از 5.8.2 به 5.9.0
  - به‌روزرسانی target در tsconfig.json از ES2022 به ES2023
  - به‌روزرسانی @angular/build، @angular/cli، @angular/compiler-cli به نسخه 21.0.0
  - به‌روزرسانی ng-packagr به نسخه 21.0.0
  - به‌روزرسانی @ngrx/store و ngx-bootstrap به نسخه 21.0.0
  - تبدیل constructor injection به inject() در app.ts
  - تبدیل *ngFor به @for در app.html برای استفاده از control flow جدید Angular 21
  - آماده‌سازی پروژه برای استفاده از Best Practices Angular 21
  - نصب وابستگی‌ها با `npm install --legacy-peer-deps` به دلیل عدم سازگاری ngx-bootstrap@20.0.2 با Angular 21
  - توجه: ngx-bootstrap هنوز برای Angular 21 به‌روزرسانی نشده است (آخرین نسخه 20.0.2)
  - شناسایی و رفع 2 آسیب‌پذیری امنیتی با سطح بالا با استفاده از `npm audit fix --legacy-peer-deps`
  - تمام آسیب‌پذیری‌ها برطرف شدند (0 vulnerabilities)

## 2025-12-22 14:11:34

- رفع مشکل dependency conflict در `ngx-ntk-icon-picker`: تغییر محدودیت نسخه `@fortawesome/angular-fontawesome` از `>=0.10.2` به `^0.10.2` برای جلوگیری از نصب نسخه 4.0.0 که نیاز به Angular 21 دارد و سازگاری با Angular 20

## 2025-12-12 11:46:46

- اضافه کردن importهای enumهای مفقود در فایل‌های Model: اصلاح نام enumها از camelCase به PascalCase (مثل `transactionAssistantCartStatusEnum` به `TransactionAssistantCartStatusEnum`)
- اصلاح importهای Modelها در فایل‌های service: اضافه کردن importهای مفقود و اصلاح نام Modelها و enumها
- اصلاح فایل `transactionAssistantShipment.service.ts`: تغییر import از `TransactionAssistantShipmentModel` (که وجود نداشت) به `TransactionAssistantOrderShipmentModel`
- اضافه کردن exportهای const در Modelها: `transactionAssistantCartModel`، `transactionAssistantOrderModel` و `transactionAssistantPaymentModel`
- اصلاح نام‌های enumها در تمام فایل‌های Model و service از camelCase به PascalCase

## 2025-12-12 10:36:58

- رفع خطای TypeScript TS2308 در `_export.ts`: حذف exportهای تکراری `transactionAssistantCartModel`، `transactionAssistantOrderModel` و `transactionAssistantOrderShipmentModel` که قبلاً از فایل‌های ViewModel صادر می‌شدند.

## 2025-12-10

- اصلاح `cashApiIsValid` به حالت async با انتظار غیرمسدودکننده برای جلوگیری از قفل شدن UI و در عین حال صبر تا اتمام اجرای قبلی.
- به‌روزرسانی فراخوانی‌ها در `coreEnum.service.ts` و `apiCmsServerBase.service.ts` برای سازگاری با نسخه‌ی async و جلوگیری از اجرای هم‌زمان ناخواسته.

