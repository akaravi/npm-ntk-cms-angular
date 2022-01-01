import { EnumParseMode } from "../../enums/api-telegram/enumParseMode";
import { EnumDayOfWeek } from "../../enums/enumDayOfWeek";
import { EnumScheduleCronType } from "../../enums/enumScheduleCronType";

export class ApiTelegramSendMessageTodoModel  {
  ScheduleCronType: EnumScheduleCronType
  CronOnceDate: Date;
  CronHourlyMinute:number;
  CronDailyHour: number;
  CronDailyMinute: number;
  CronMonthlyDay: number;
  CronMonthlyHour: number;
  CronMonthlyMinute: number;
  CronWeeklyDayOfWeek: number;
  CronWeeklyHour: number;
  CronWeeklyMinute: number;
  CronYearlyMonth: number;
  CronYearlyDay: EnumDayOfWeek;
  CronYearlyHour: number;
  CronYearlyMinute: number;
  title: string;
  text: string;
  BotId: number;
  chatId: number[];
  MemberGroupId: number[];
  SentToAllMembers: boolean;
  LinkFileId?: number;
  latitude: number;
  longitude: number;
  firstName: number;
  lastName: number;
  universalMenuId?: number;
  phoneNumber: string;
  MessageParseMode:EnumParseMode;


}
