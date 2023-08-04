import { EnumParseMode } from "../../enums/api-telegram/parseModeEnum";
import { EnumDayOfWeek } from "../../enums/base/dayOfWeekEnum";
import { EnumScheduleCronType } from "../../enums/base/scheduleCronTypeEnum";

export class ApiTelegramSendMessageTodoModel {
  scheduleCronType: EnumScheduleCronType
  cronOnceDate: Date;
  cronHourlyMinute: number;
  cronDailyHour: number;
  cronDailyMinute: number;
  cronMonthlyDay: number;
  cronMonthlyHour: number;
  cronMonthlyMinute: number;
  cronWeeklyDayOfWeek: number;
  cronWeeklyHour: number;
  cronWeeklyMinute: number;
  cronYearlyMonth: number;
  cronYearlyDay: EnumDayOfWeek;
  cronYearlyHour: number;
  cronYearlyMinute: number;
  title: string;
  text: string;
  botId: number;
  chatId: number[];
  memberGroupId: number[];
  sentToAllMembers: boolean;
  linkFileId?: number;
  latitude: number;
  longitude: number;
  firstName: number;
  lastName: number;
  universalMenuId?: number;
  phoneNumber: string;
  messageParseMode: EnumParseMode;
}
