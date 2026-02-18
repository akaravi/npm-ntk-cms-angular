## 2026-02-18

- هماهنگی با قرارداد مسیریابی جدید Core (routeTarget):
  - تغییر نام پارامتر `appInfoFilter` به `routeTarget` در متدهای `ServicePing` و `ServiceSendCommand`
  - افزودن property‌های `instanceIdentifier`، `runtimeIdentity` و `routeTarget` (getter) به `CoreLogMicroServiceStatusModel`
  - افزودن کامنت‌های توضیحی برای قرارداد مسیریابی: Core با routingKey = routeTarget پublish می‌کند
  - هماهنگ با تغییرات Core: API حالا از routeTarget استفاده می‌کند (InstanceIdentifier_RuntimeIdentity برای نمونه خاص، InstanceIdentifier برای broadcast)

## 2026-02-16

- هماهنگ‌سازی فرمت coreLogMicroServiceStatus.service.ts با سایر سرویس‌های core-log:
  - مرتب‌سازی importها مطابق الگوی coreLogMember و coreLogError
  - قرار دادن entity models در ابتدا، سپس base و dto
  - افزودن خط خالی قبل از @Injectable() مطابق سایر سرویس‌ها
  - حفظ متدهای سفارشی (ServiceGetAllStatus، ServiceGetStatusByAppInfoFilter، ServicePing، ServiceSendCommand) به دلیل endpointهای متفاوت API

## 2026-01-03 16:45:00

- اضافه کردن آدرس‌دهی خودکار فونت‌ها در ngx-ntk-icon-picker:
  - ایجاد فایل `src/styles.scss` برای فونت‌های FontAwesome و PrimeIcons
  - اضافه کردن import فونت‌ها در `icon-picker.component.scss`
  - اضافه کردن `src/styles.scss` به assets در `ng-package.json`
  - حالا فونت‌ها به صورت خودکار در build پروژه شامل می‌شوند
  - Material Icons از طریق CDN لود می‌شوند (نیازی به import نیست)

## 2026-01-03 16:40:00

- اضافه کردن فونت‌های مورد نیاز به package.json هر پروژه:
  - `ngx-ntk-icon-picker`: اضافه کردن `@fortawesome/fontawesome-free` و به‌روزرسانی `primeicons` به `>=7.0.0` در peerDependencies
  - اطمینان از اینکه تمام فونت‌های مورد نیاز هر پروژه در package.json خودش پیش‌بینی شده است

## 2026-01-03 16:35:00

- به‌روزرسانی فونت‌ها و آیکون‌ها به آخرین نسخه‌ها:
  - `@fortawesome/angular-fontawesome`: از `^0.10.2` به `^4.0.0` (نسخه major جدید با پشتیبانی از Angular 21)
  - `@fortawesome/fontawesome-svg-core`: از `^6.7.2` به `^7.1.0` (نسخه major جدید)
  - `@fortawesome/free-solid-svg-icons`: از `^6.7.2` به `^7.1.0` (نسخه major جدید)
  - `@fortawesome/fontawesome-free`: از `5.15.4` به `^7.1.0` (نسخه major جدید)
  - `primeicons`: `^7.0.0` (به‌روز است)
  - به‌روزرسانی peer dependencies در `ngx-ntk-icon-picker/package.json`
  - پروژه با موفقیت build شد

## 2026-01-03 15:30:00

- به‌روزرسانی کامل package.json های تمام پروژه‌ها برای npmjs.com:
  - اضافه کردن `repository` با لینک GitHub و directory برای تمام 9 پروژه
  - اضافه کردن `bugs` با لینک به issues در GitHub
  - اضافه کردن `homepage` با لینک به README اصلی
  - بهبود `description` برای تمام پروژه‌ها (توضیحات کامل و حرفه‌ای)
  - بهبود `keywords` برای جستجوی بهتر در npm
  - بررسی و تأیید کپی شدن README.md در dist توسط ng-packagr
  - تمام package.json ها حالا برای publish در npmjs.com آماده هستند

## 2026-01-03 15:15:00

- به‌روزرسانی کامل تمام README.md های پروژه‌ها:
  - اضافه کردن header با badges برای تمام پروژه‌ها
  - اضافه کردن لینک‌های مستقیم به README.md اصلی
  - اضافه کردن بخش npm Package با دستورات نصب
  - اضافه کردن بخش Related Libraries با لینک به سایر پروژه‌ها
  - بهبود بخش Support با لینک‌های GitHub و npm
  - اضافه کردن footer حرفه‌ای با لینک‌های GitHub و npm
  - تمام README.md ها حالا کامل و حرفه‌ای هستند

## 2026-01-03 15:10:00

- به‌روزرسانی کامل README.md اصلی:
  - اضافه کردن badges برای Angular, TypeScript, License, npm
  - اضافه کردن لینک‌های مستقیم به تمام README.md های پروژه‌ها
  - اضافه کردن جدول سازگاری Angular 20 و 21
  - بهبود ساختار و فرمت‌بندی
  - اضافه کردن توضیحات کامل برای npm و GitHub
  - اضافه کردن دستورات نصب و استفاده
  - بهبود بخش‌های Installation, Quick Start, Documentation
  - اضافه کردن بخش‌های Support, Contributing, Statistics

## 2026-01-03 15:06:00

- رفع خطاهای TypeScript module resolution:
  - تغییر `module` از `"esnext"` به `"ES2022"` در tsconfig.json
  - اضافه کردن `moduleResolution: "bundler"` برای Angular 21
  - اضافه کردن `lib: ["ES2022", "dom"]` برای پشتیبانی از DOM APIs
  - خطاهای "Cannot find module '@angular/core'" برطرف شدند
  - پروژه با موفقیت build شد

## 2026-01-03 14:51:00

- پشتیبانی از Angular 20 و 21 در تمام packages:
  - به‌روزرسانی peer dependencies در تمام package.json های پروژه‌های فرعی:
    - ntk-cms-api
    - ngx-ntk-cron-editor
    - ngx-ntk-mat-color-picker
    - ngx-ntk-file-picker
    - ngx-ntk-query-builder
    - ntk-cms-fileuploader
    - ntk-cms-filemanager
    - ngx-ntk-smart-module
    - ngx-ntk-icon-picker
  - تغییر از `^20.1.0` به `^20.1.0 || ^21.0.0` برای `@angular/common` و `@angular/core`
  - تمام packages حالا هم با Angular 20 و هم با Angular 21 سازگار هستند
  - پروژه با موفقیت build شد

## 2026-01-03 14:50:00

- پشتیبانی از Angular 20 و 21 در ngx-ntk-icon-picker:
  - تغییر peer dependencies از `^21.0.0` به `^20.1.0 || ^21.0.0`
  - حالا package هم با Angular 20 و هم با Angular 21 سازگار است
  - برای نصب در پروژه‌های Angular 20 می‌توان از `npm install --legacy-peer-deps` استفاده کرد

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
  - تبدیل \*ngFor به @for در app.html برای استفاده از control flow جدید Angular 21
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
