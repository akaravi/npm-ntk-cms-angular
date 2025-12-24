import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramLogInputModel } from "./apiTelegramLogInputModel";
import { ApiTelegramLogOutputModel } from "./apiTelegramLogOutputModel";
//@@tag-Version-2201011
/**
 * تنظیمات ربات تلگرام در لایه Angular.
 */
export class ApiTelegramBotConfigModel extends BaseModuleEntity<number> {
  /** عنوان ربات. */
  title: string;
  /** نام کاربری ربات. */
  username: string;
  /** توکن دسترسی. */
  botToken: string;
  /** کلید امنیتی. */
  securityKey: string;
  /** آدرس وبهوک. */
  urlWebhook: string;
  /** وضعیت فعال بودن وبهوک. */
  statusWebhook?: boolean;
  /** منوی یونیورسال در حالت تشخیص‌ناپذیر. */
  linkUniversalMenuIdOnUndetectableKey?: number;
  /** منوی یونیورسال متصل. */
  linkUniversalMenuId?: number;
  /** شناسه تصویر QR. */
  linkQRCodeImageId?: number;
  /** آمار تعداد اعضا. */
  statisticsMemberCount?: number;
  /** لاگ‌های ورودی مرتبط. */
  logInputs: ApiTelegramLogInputModel[];
  /** لاگ‌های خروجی مرتبط. */
  logOutputs: ApiTelegramLogOutputModel[];
  /** لینک نمایش تنظیمات. */
  urlViewContent: string;
  /** لینک کوتاه نمایش. */
  urlViewContentShort: string;
  /** QR کد نمایش Base64. */
  urlViewContentQRCodeBase64: string;
  /** Hook عمومی API. */
  hookAddressAPI: string;
  /** Hook API با شناسه. */
  hookAddressAPIById: string;
}
