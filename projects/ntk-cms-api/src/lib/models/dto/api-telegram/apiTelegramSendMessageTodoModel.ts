import { ParseModeEnum } from "../../enums/api-telegram/parseModeEnum";
import { DayOfWeekEnum } from "../../enums/base/dayOfWeekEnum";
import { ScheduleCronTypeEnum } from "../../enums/base/scheduleCronTypeEnum";

export class ApiTelegramSendMessageTodoModel {
  scheduleCronType: ScheduleCronTypeEnum
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
  cronYearlyDay: DayOfWeekEnum;
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
  messageParseMode: ParseModeEnum;
}
