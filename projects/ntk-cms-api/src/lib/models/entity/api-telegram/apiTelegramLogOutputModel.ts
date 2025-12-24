import { MessageTypeEnum } from "../../enums/api-telegram/messageTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
/**
 * لاگ خروجی تلگرام در کلاینت Angular.
 */
export class ApiTelegramLogOutputModel extends BaseModuleEntity<string> {
  /** شناسه چت گیرنده. */
  chatId: number;
  /** ارجاع به لاگ ورودی (در صورت پاسخ). */
  linkLogInput?: number;
  /** نوع پیام ارسال‌شده. */
  messageType: MessageTypeEnum;
  /** شناسه فرآیند یونیورسال. */
  linkUniversalProcessId: number;
  /** فرآیند دنبال‌کننده پاسخ. */
  linkUniversalProcessIdFollowAnswer?: number;
  /** شناسه منوی یونیورسال. */
  linkUniversalMenuId?: number;
  /** سطح منوی یونیورسال. */
  linkUniversalMenuIdLevel?: number;
  /** ارجاع به پیکربندی ربات. */
  linkBotConfigId: number;
  /** محتوای پیام ارسال‌شده. */
  contentMessage: string;
  /** نتیجه/خروجی سرویس. */
  contentResult: string;
  /** انتظار دریافت پاسخ. */
  expectReply: boolean;
  /** پارامترهای ارسال. */
  parameters: string;
}
