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

