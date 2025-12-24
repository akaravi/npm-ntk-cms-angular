import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
//@@tag-Version-2201011
/**
 * مدل سوالات متداول تیکت
 */
export class TicketingFaqModel extends BaseModuleEntity<number> {
    /** سوال */
    question: string;
    /** پاسخ */
    answer: string;
    /** لینک به شناسه دپارتمان تیکت */
    linkTicketingDepartemenId?: number;
    /** دپارتمان تیکت (مجازی) */
    // tslint:disable-next-line: variable-name
    virtual_TicketingDepartemen: TicketingDepartemenModel;
    /** دپارتمان تیکت */
    ticketingDepartemen: TicketingDepartemenModel;
    /** لینک به شناسه فایل‌ها */
    linkFileIds: string;
    /** آدرس‌های فایل‌ها */
    linkFileIdsSrc: string[];
}

