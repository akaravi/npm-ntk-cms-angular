import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
//@@tag-Version-2201011
/**
 * مدل اپراتور دپارتمان تیکت
 */
export class TicketingDepartemenOperatorModel extends BaseModuleEntity<number> {
    /** لینک به شناسه دپارتمان */
    linkDepartemenId: number;
    /** لینک به شناسه کاربر */
    linkUserId: number;
    /** دپارتمان (مجازی) */
    // tslint:disable-next-line: variable-name
    virtual_Departemen: TicketingDepartemenModel;
    /** دپارتمان */
    departemen: TicketingDepartemenModel;
    /** لیست پاسخ‌ها */
    answers: TicketingAnswerModel[];
    /** لینک به شناسه تصویر اصلی */
    linkMainImageId?: number;
    /** آدرس تصویر اصلی */
    linkMainImageIdSrc: string;
}
