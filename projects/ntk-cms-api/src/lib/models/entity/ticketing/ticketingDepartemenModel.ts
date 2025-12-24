import { TicketAccessStatusEnum } from '../../enums/ticketing/ticketAccessStatusEnum';
import { TicketingDepartemenPriorityEnum } from '../../enums/ticketing/ticketingDepartemenPriorityEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';
//@@tag-Version-2201011
/**
 * مدل دپارتمان تیکت
 */
export class TicketingDepartemenModel extends BaseModuleEntity<number> {
    /** عنوان */
    title: string;
    /** جواب پیش‌فرض برای این بخش */
    defaultAnswerBody: string;
    /** اولویت در پاسخگویی */
    priority: TicketingDepartemenPriorityEnum;
    /** آیا تیکت‌های این بخش می‌توانند به بخش دیگری ارسال شوند */
    accessToChangeType: TicketAccessStatusEnum;
    /** لیست تیکت‌ها */
    tickets: TicketingTaskModel[];
    /** لیست پاسخ‌های تیکت */
    ticketAnswers: TicketingAnswerModel[];
    /** لیست سوالات متداول */
    faqs: TicketingFaqModel[];
    /** لیست اپراتورهای دپارتمان */
    operators: TicketingDepartemenOperatorModel[];
    /** لینک به شناسه تصویر اصلی */
    linkMainImageId?: number;
    /** آدرس تصویر اصلی */
    linkMainImageIdSrc: string;
}
