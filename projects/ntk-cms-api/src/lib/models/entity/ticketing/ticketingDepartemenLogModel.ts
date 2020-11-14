import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingDepartemenLogModel extends BaseModuleEntity<number>  {
    LinkFromOperatorId?: number;
    FromOperator: TicketingDepartemenOperatorModel;
    LinkFromTicketingDepartemenId?: number;
    FromTicketingDepartemen: TicketingDepartemenModel;
    LinkToTicketingDepartemenId?: number;
    ToTicketingDepartemen: TicketingDepartemenModel;
    Tickets: TicketingTaskModel[];
    TicketAnswers: TicketingAnswerModel[];
    Faqs: TicketingFaqModel[];
    Operators: TicketingDepartemenOperatorModel[];
}
