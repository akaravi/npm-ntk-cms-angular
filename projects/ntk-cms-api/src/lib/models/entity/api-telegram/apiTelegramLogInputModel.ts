import { MessageTypeEnum } from "../../enums/api-telegram/messageTypeEnum";
import { UpdateTypeEnum } from "../../enums/api-telegram/updateTypeEnum";
import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
/**
 * لاگ ورودی تلگرام در کلاینت Angular.
 */
export class ApiTelegramLogInputModel extends BaseModuleEntity<string> {
  /** شناسه چت. */
  chatId: number;
  /** شناسه کاربر. */
  userId: number;
  /** نام کاربری. */
  username: string;
  /** نام. */
  firstName: string;
  /** نام خانوادگی. */
  lastName: string;
  /** نوع به‌روزرسانی. */
  updateType: UpdateTypeEnum;
  /** نوع پیام. */
  messageType: MessageTypeEnum;
  /** شناسه پیام. */
  messageId: string;
  /** ارجاع به پیکربندی ربات. */
  linkBotConfigId: number;
  /** محتوای پیام. */
  contentMessage: string;
  /** کپشن پیام. */
  captionMessage: string;
}
