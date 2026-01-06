import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderOutBoxTypeEnum } from '../../enums/data-provider/dataProviderOutBoxTypeEnum';
//@@tag-Version-2201011
/**
 * مدل لاگ استفاده از مسیر Source ارائه‌دهنده داده
 */
export class DataProviderLogSourcePathModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر Source */
  linkSourcePathId: string;
  /** لینک به شناسه کاربر CMS */
  linkCmsUser?: number;
  /** درخواست داده (JSON) */
  requestData: string;
  /** پاسخ داده (JSON) */
  responseData: string;
  /** یادداشت */
  memo: string;
  /** اعتبار کاربر قبل از استفاده */
  creditUserBeforeUse: number;
  /** اعتبار کاربر قبل از برگشت */
  creditUserBeforeBack: number;
  /** اعتبار اضافی */
  creditOverPlus: number;
  /** نوع استفاده */
  outBoxType: DataProviderOutBoxTypeEnum;
  /** عنوان نوع استفاده */
  outBoxTypeTitle: string;
  /** تاریخ استفاده */
  useDate: Date;
  /** تعداد تلاش موتور برای استفاده */
  engineTryToUseCount: number;
  /** تعداد ردیف */
  countRow: number;
  /** تعداد استفاده شده */
  countUsed: number;
  /** تعداد موفق */
  countSuccess: number;
  /** تعداد برگشت اعتبار */
  countCreditBacked: number;
  /** تعداد اعتبار برگشت شده سرویس دهنده */
  countServiceCreditBacked: number;
  /** مجموع اعتبار کاربر */
  sumCredit: number;
  /** مجموع اعتبار سرویس */
  sumServiceCredit: number;
  /** مجموع اعتبار برگشت شده */
  sumCreditBacked: number;
  /** برگشت اعتبار انجام شد */
  creditBackedCompleted: boolean;
  /** تاریخ برگشت اعتبار */
  creditBackedDate?: Date;
  /** هزینه ماهیانه (اگر دسترسی ماهیانه باشد) */
  isMonthlyAccess: boolean;
  /** تاریخ شروع دسترسی ماهیانه */
  monthlyAccessStartDate?: Date;
  /** تاریخ پایان دسترسی ماهیانه */
  monthlyAccessEndDate?: Date;
}

