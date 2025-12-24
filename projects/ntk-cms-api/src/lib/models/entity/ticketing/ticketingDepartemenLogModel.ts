import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';
//@@tag-Version-2201011
/**
 * مدل لاگ دپارتمان تیکت
 */
export class TicketingDepartemenLogModel extends BaseModuleEntity<number> {
    /** لینک به شناسه اپراتور مبدا */
    linkFromOperatorId?: number;
    /** اپراتور مبدا */
    fromOperator: TicketingDepartemenOperatorModel;
    /** لینک به شناسه دپارتمان تیکت مبدا */
    linkFromTicketingDepartemenId?: number;
    /** دپارتمان تیکت مبدا */
    fromTicketingDepartemen: TicketingDepartemenModel;
    /** لینک به شناسه دپارتمان تیکت مقصد */
    linkToTicketingDepartemenId?: number;
    /** دپارتمان تیکت مقصد */
    toTicketingDepartemen: TicketingDepartemenModel;
    /** لیست تیکت‌ها */
    tickets: TicketingTaskModel[];
    /** لیست پاسخ‌های تیکت */
    ticketAnswers: TicketingAnswerModel[];
    /** لیست سوالات متداول */
    faqs: TicketingFaqModel[];
    /** لیست اپراتورهای دپارتمان */
    operators: TicketingDepartemenOperatorModel[];
}
