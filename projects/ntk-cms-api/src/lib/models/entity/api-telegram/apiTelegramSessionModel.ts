import { BaseModuleEntity } from "../base/baseModuleEntity";
//@@tag-Version-2201011
/**
 * نشست موقت کاربر در ربات تلگرام (Angular).
 */
export class ApiTelegramSessionModel extends BaseModuleEntity<string> {
  /** شناسه کاربر تلگرام. */
  userId: Number;
  /** پارامترهای نشست سریال‌شده. */
  parameters: string;
  /** شناسه تنظیمات ربات. */
  linkBotConfigId: number;
}
