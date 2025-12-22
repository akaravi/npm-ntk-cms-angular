import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * امتیازدهی تأمین‌کننده / حساب (Supplier Rating)
 * شامل شاخص‌های کیفیت، تحویل، قیمت و پشتیبانی
 */
export class CrmSupplierRatingModel extends BaseModuleEntity<string> {
  /** لینک به حساب تأمین‌کننده */
  linkAccountId?: string;
  /** امتیاز کیفیت محصول (0-5) */
  scoreQuality: number;
  /** امتیاز دقت در زمان تحویل (0-5) */
  scoreDelivery: number;
  /** امتیاز همکاری و پاسخگویی (0-5) */
  scoreCooperation: number;
  /** امتیاز رقابتی بودن قیمت (0-5) */
  scorePrice: number;
  /** امتیاز انعطاف‌پذیری (0-5) */
  scoreFlexibility: number;
  /** امتیاز خدمات پس از فروش (0-5) */
  scoreSupport: number;
  /** میانگین امتیاز محاسبه‌شده */
  averageScore: number;
  /** تاریخ ارزیابی */
  evaluationDate: Date;
  /** یادداشت یا توضیحات تکمیلی */
  notes: string;
}


