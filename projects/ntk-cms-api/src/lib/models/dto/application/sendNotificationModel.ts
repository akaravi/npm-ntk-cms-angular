import { EnumScheduleCronType } from './../../enums/enumScheduleCronType';
import { RenderModelApplicationSendNotificationInput } from './renderModelApplicationSendNotificationInput';

export class SendNotificationModel extends RenderModelApplicationSendNotificationInput {


    ScheduleCronTypeInt: number;
    CronWeeklyDayOfWeekInt: number;

    scheduleCronType: EnumScheduleCronType;
    cronOnceDate?: string;
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
    cronYearlyDay: number;
    cronYearlyHour: number;
    cronYearlyMinute: number;

}
