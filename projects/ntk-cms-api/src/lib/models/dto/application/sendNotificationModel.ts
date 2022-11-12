import { EnumScheduleCronType } from '../../enums/base/enumScheduleCronType';
import { RenderModelApplicationSendNotificationInput } from './renderModelApplicationSendNotificationInput';

export class SendNotificationModel extends RenderModelApplicationSendNotificationInput {
    scheduleCronTypeInt: number;
    cronWeeklyDayOfWeekInt: number;
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
