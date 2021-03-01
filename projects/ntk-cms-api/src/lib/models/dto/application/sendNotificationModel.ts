import { EnumScheduleCronType } from '../../enums/enumScheduleCronType';
import { RenderModelApplicationSendNotificationInput } from './renderModelApplicationSendNotificationInput';

export class SendNotificationModel extends RenderModelApplicationSendNotificationInput {


    ScheduleCronTypeInt: number;
    CronWeeklyDayOfWeekInt: number;

    ScheduleCronType: EnumScheduleCronType;
    CronOnceDate?: string;
    CronHourlyMinute: number;
    CronDailyHour: number;
    CronDailyMinute: number;
    CronMonthlyDay: number;
    CronMonthlyHour: number;
    CronMonthlyMinute: number;
    CronWeeklyDayOfWeek: number;
    CronWeeklyHour: number;
    CronWeeklyMinute: number;
    CronYearlyMonth: number;
    CronYearlyDay: number;
    CronYearlyHour: number;
    CronYearlyMinute: number;

}
