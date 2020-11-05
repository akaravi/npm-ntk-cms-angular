import { RenderModelApplicationSendNotificationInput } from './renderModelApplicationSendNotificationInput';

export class SendNotificationModel: extends RenderModelApplicationSendNotificationInput {


    ScheduleCronTypeInt: number;
    CronWeeklyDayOfWeekInt: number;

    scheduleCronType: ScheduleCronTypeEnum;
    cronOnceDate?: string;
    cronHourlyMinute: number;
    cronDailyHour: number;
    cronDailyMinute: number;
    cronMonthlyDay: number;
    cronMonthlyHour: number;
    cronMonthlyMinute: number;
    cronWeeklyDayOfWeek: DayOfWeek;
    cronWeeklyHour: number;
    cronWeeklyMinute: number;
    cronYearlyMonth: number;
    cronYearlyDay: number;
    cronYearlyHour: number;
    cronYearlyMinute: number;

}
