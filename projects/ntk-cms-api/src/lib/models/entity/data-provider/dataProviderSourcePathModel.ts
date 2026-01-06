import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourceCompanyModel } from './dataProviderSourceCompanyModel';
import { DataProviderSourcePublicConfigModel } from './dataProviderSourcePublicConfigModel';
//@@tag-Version-2201011
/**
 * مدل مسیر منبع API ارائه‌دهنده داده
 */
export class DataProviderSourcePathModel extends BaseModuleEntity<string> {
  /** عنوان مسیر */
  title: string;
  /** عنوان صف */
  queueTitle: string;
  /** توضیحات */
  description: string;
  /** کد سیستمی مسیر */
  apiIdentity: number;
  /** کلید برای دریافت مسیر */
  apiReceiveKey: string;
  /** اولویت مسیر */
  priority: number;
  /** شروع ساعت کاری */
  perriodStartWorkTime?: any;
  /** پایان ساعت کاری */
  perriodEndWorkTime?: any;
  /** قابلیت اتصال به دفترچه تلفن مخابراتی */
  serverAbilityApiPhoneBook: boolean;
  /** قابلیت اتصال به مسیر صوتی */
  serverAbilityApiVoice: boolean;
  /** قابلیت ارسال تعداد در دقیقه */
  serverConnectionPerMinute: number;
  /** حداقل تعداد در هر بسته ارسالی */
  serverAbilityMinPack: number;
  /** حداکثر تعداد در هر بسته ارسالی */
  serverAbilityMaxPack: number;
  /** قابلیت هزینه بر اساس دلیوری */
  serverDeliveryCostBase: boolean;
  /** نیاز به ارسال تست در زمان روشن شدن */
  apiMinPathNeedToCheckIsOn: boolean;
  /** حداقل سفارش نیاز به تایید ارسال */
  apiMinPathNeedToCheck: number;
  /** لینک به شناسه کمپانی منبع */
  linkSourceCompanyId: string;
  /** کمپانی منبع (مجازی) */
  virtual_SourceCompany: DataProviderSourceCompanyModel;
  /** کمپانی منبع */
  sourceCompany: DataProviderSourceCompanyModel;
  /** کانتر کمپانی اعمال می‌شود */
  sourceCompanyCounterIsOn: boolean;
  /** قابلیت ارسال یونیکد دارد */
  apiAbilitySendUnicodeMessage: boolean;
  /** قابلیت ارسال غیر یونیکد دارد */
  apiAbilitySendNormalMessage: boolean;
  /** آیا مسیر جانشین استفاده شود */
  apiAllowSupersede: boolean;
  /** قابلیت اتصال از طریق وب سرویس */
  apiAbilityUseWebservice: boolean;
  /** قابلیت استفاده برای کاربران سایت */
  apiAbilityUseInside: boolean;
  /** پیش شماره های قابل قبول */
  apiAbilityRegulatorAllowToSend: string;
  /** پیش شماره های غیر قابل قبول */
  apiAbilityRegulatorDenayToSend: string;
  /** حداقل اندازه شماره گیرنده */
  apiAbilityLengthMinToSend: number;
  /** حداکثر اندازه شماره گیرنده */
  apiAbilityLengthMaxToSend: number;
  /** ارسال پیام فعال است */
  apiSendMessageIsOn: boolean;
  /** متن اضافه شده به ابتدای پیام در API */
  apiSendMessageAddTextFirst: string;
  /** متن اضافه شده به انتهای پیام در API */
  apiSendMessageAddTextEnd: string;
  /** متن اضافه شده به ابتدای پیام در ارسال */
  sendMessageAddTextFirst: string;
  /** متن اضافه شده به انتهای پیام در ارسال */
  sendMessageAddTextEnd: string;
  /** دریافت وضعیت تحویل فعال است */
  apiDeliveryIsOn: boolean;
  /** برگشت اعتبار فعال است */
  apiCreditBackIsOn: boolean;
  /** دریافت به صورت آدرس hook فعال است */
  apiReceiveHookIsOn: boolean;
  /** دریافت به صورت درخواست دستی فعال است */
  apiReceiveManuallyIsOn: boolean;
  /** آدرس بررسی دستی */
  apiReceiveManuallyAddressLink: string;
  /** بررسی اعتبار فعال است */
  apiInfoCreditCheckIsOn: boolean;
  /** بانک شماره فعال است */
  apiPhoneBookIsOn: boolean;
  /** ارسال پیام صوتی فعال است */
  apiSendVoiceIsOn: boolean;
  /** متن خطا برای حالت آماده به کار */
  errorTextToStandBy?: any;
  /** متن خطا برای غیرفعال کردن */
  errorTextToDisable?: any;
  /** آخرین متن خطا دریافت شده برای حالت آماده به کار */
  errorTextToStandByLastGet?: any;
  /** تاریخ آخرین دریافت متن خطا برای حالت آماده به کار */
  errorTextToStandByLastGetDate?: any;
  /** تعداد خروج از حالت آماده به کار */
  errorTextToStandByExit: number;
  /** آخرین متن خطا دریافت شده برای غیرفعال کردن */
  errorTextToDisableLastGet?: any;
  /** تاریخ آخرین دریافت متن خطا برای غیرفعال کردن */
  errorTextToDisableLastGetDate?: any;
  /** عمومی است */
  isPublic: boolean;
  /** حداکثر مبلغ گردش کار */
  maxProcessFlowAmount: number;
  /** حداقل مبلغ گردش کار */
  minProcessFlowAmount: number;
  /** کارمزد ثابت گردش کار */
  fixFeeProcessFlowAmount: number;
  /** کارمزد درصدی گردش کار */
  percentFeeProcessFlowAmount: number;
  /** لینک به شناسه تنظیمات عمومی */
  linkPublicConfigId: string;
  /** تنظیمات خصوصی به صورت JSON */
  privateConfigJsonValues: string;
  /** یادداشت */
  memo: string;
  /** تنظیمات عمومی (مجازی) */
  virtual_PublicConfig: DataProviderSourcePublicConfigModel;
  /** تنظیمات عمومی */
  publicConfig: DataProviderSourcePublicConfigModel;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** کاراکتر های داخل ای پی آی */
  statusOutOfServiceMonitorApiChar: string;
  /** وضعیت خارج از سرویس */
  statusOutOfServiceActive: boolean;
  /** زمان پایان خارج از سرویس بوددن */
  statusOutOfServiceExpire?: any;
  /** مانیتور کردن کاراکتر های داخل  ای پی آی */
  statusNotStableActiveMonitorApiChar: string;
  /** وضعیت پایدار نبودن سرویس */
  statusNotStableActive: boolean;
  /** زمان پایان پایدارنبودن سرویس */
  statusNotStableExpire?: any;
  /** تعداد ایجاد شده ناپایداری */
  statusNotStableCount: number;
  /** تعداد محدودیت ناپایداری */
  statusNotStableCountLimit: number;
  /** زمان اجرا برای ناپایداری برای هر بار */
  statusNotStableRunForMin: number;
}

