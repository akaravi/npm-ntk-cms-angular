import { BaseModuleEntity } from "../base/baseModuleEntity";
import { ApiTelegramBotConfigModel } from "./apiTelegramBotConfigModel";
//@@tag-Version-2201011
/**
 * اطلاعات عضویت کاربر در ربات تلگرام (Angular).
 */
export class ApiTelegramMemberInfoModel extends BaseModuleEntity<number> {
  /** شناسه کاربر CMS (در صورت اتصال). */
  linkUserId?: Number;
  /** شناسه عضو سیستم Member. */
  linkMemberId?: Number;
  /** شناسه چت تلگرام. */
  chatId: number;
  /** شناسه تنظیمات ربات. */
  linkBotConfigId?: number;
  /** ناوبری مجازی تنظیمات ربات. */
  virtual_BotConfig: ApiTelegramBotConfigModel;
  /** ناوبری تنظیمات ربات. */
  botConfig: ApiTelegramBotConfigModel;
}
