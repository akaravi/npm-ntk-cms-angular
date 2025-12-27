import { BaseModuleEntity } from './../base/baseModuleEntity';
import { SmsMainApiPathCompanyModel } from './smsMainApiCompanyModel';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
import { SmsMainApiPathPaginationModel } from './smsMainApiPathPaginationModel';
import { SmsMainApiPathPermissionModel } from './smsMainApiPathPermissionModel';
import { SmsMainApiPathProcessFlowModel } from './smsMainApiPathProcessFlowModel';
import { SmsMainApiPathPublicConfigModel } from './smsMainApiPathPublicConfigModel';
import { SmsMainApiPathSupersedeModel } from './smsMainApiPathSupersedeModel';
//@@tag-Version-2305111
/**
 * مدل مسیر API پیامک
 */
export class SmsMainApiPathModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description?: any;
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
  /** لینک به شناسه کمپانی مسیر API */
  linkApiPathCompanyId: string;
  /** کمپانی مسیر API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPathCompany: SmsMainApiPathCompanyModel;
  /** کمپانی مسیر API */
  apiPathCompany: SmsMainApiPathCompanyModel;
  /** کانتر کمپانی اعمال می‌شود */
  apiPathCompanyCounterIsOn: boolean;
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
  /** قابلیت ارسال از طریق صف */
  apiAbilitySendByQueue: boolean;
  /** قابلیت ارسال مستقیم */
  apiAbilitySendByDirect: boolean;
  /** لیست مسیرهای جانشین */
  apiPathSupersedes: SmsMainApiPathSupersedeModel[];
  /** لیست مسیرهای اجباری جانشین */
  apiPathMustSupersedes: SmsMainApiPathSupersedeModel[];
  /** لیست دسترسی‌های مسیر API */
  apiPathPermissions: SmsMainApiPathPermissionModel[];
  /** لیست مسیرها و شماره‌های API */
  apiPathAndApiPathNumbers: SmsMainApiPathAndApiNumberModel[];
  /** لیست سرویس‌های قیمت مسیر API */
  apiPathPagination: SmsMainApiPathPaginationModel[];
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
  /** کاراکترهای قابل تطبیق در زمان ارسال */
  apiCreditBackCheckOnSend?: any;
  /** کاراکترهای قابل تطبیق در زمان بررسی تحویل */
  apiCreditBackCheckOnDelivery?: any;
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
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: SmsMainApiPathPublicConfigModel;
  /** لیست گردش کارهای مسیر API */
  processFlow: SmsMainApiPathProcessFlowModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس hook دریافت پیام API */
  hookAddressReceiveMessageAPI: string;
  /** آدرس hook دریافت پیام API بر اساس شناسه */
  hookAddressReceiveMessageAPIById: string;
  /** آدرس hook دریافت وضعیت تحویل API */
  hookAddressReceiveDeliveryStatusAPI: string;
  /** آدرس hook دریافت وضعیت تحویل API بر اساس شناسه */
  hookAddressReceiveDeliveryStatusAPIById: string;
  /** کاراکترهای مانیتور خارج از سرویس */
  statusOutOfServiceMonitorApiChar: string;
  /** وضعیت خارج از سرویس فعال است */
  statusOutOfServiceActive: boolean;
  /** تاریخ انقضای خارج از سرویس */
  statusOutOfServiceExpire?: Date;
  /** کاراکترهای مانیتور ناپایداری */
  statusNotStableMonitorApiChar: string;
  /** وضعیت پایدار نبودن سرویس فعال است */
  statusNotStableActive: boolean;
  /** تاریخ انقضای پایدار نبودن سرویس */
  statusNotStableExpire?: Date;
  /** تعداد ایجاد شده ناپایداری */
  statusNotStableCount: number;
  /** تعداد محدودیت ناپایداری */
  statusNotStableCountLimit: number;
  /** زمان اجرا برای ناپایداری برای هر بار (دقیقه) */
  statusNotStableRunForMin: number;
}
