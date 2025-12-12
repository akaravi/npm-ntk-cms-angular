## 2025-12-12 10:36:58

- رفع خطای TypeScript TS2308 در `_export.ts`: حذف exportهای تکراری `transactionAssistantCartModel`، `transactionAssistantOrderModel` و `transactionAssistantOrderShipmentModel` که قبلاً از فایل‌های ViewModel صادر می‌شدند.

## 2025-12-10

- اصلاح `cashApiIsValid` به حالت async با انتظار غیرمسدودکننده برای جلوگیری از قفل شدن UI و در عین حال صبر تا اتمام اجرای قبلی.
- به‌روزرسانی فراخوانی‌ها در `coreEnum.service.ts` و `apiCmsServerBase.service.ts` برای سازگاری با نسخه‌ی async و جلوگیری از اجرای هم‌زمان ناخواسته.

