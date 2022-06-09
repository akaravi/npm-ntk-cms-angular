import { EnumParseMode } from "../../enums/api-telegram/enumParseMode";
import { EnumDayOfWeek } from "../../enums/enumDayOfWeek";
import { EnumScheduleCronType } from "../../enums/enumScheduleCronType";

export class ApiTelegramSendMessageTodoModel  {
  scheduleCronType: EnumScheduleCronType
  cronOnceDate: Date;
  cronHourlyMinute:number;
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
  messageParseMode:EnumParseMode;
}
