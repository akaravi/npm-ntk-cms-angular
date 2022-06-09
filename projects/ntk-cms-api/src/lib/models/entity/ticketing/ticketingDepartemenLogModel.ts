import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingDepartemenLogModel extends BaseModuleEntity<number>  {
    linkFromOperatorId?: number;
    fromOperator: TicketingDepartemenOperatorModel;
    linkFromTicketingDepartemenId?: number;
    fromTicketingDepartemen: TicketingDepartemenModel;
    linkToTicketingDepartemenId?: number;
    toTicketingDepartemen: TicketingDepartemenModel;
    tickets: TicketingTaskModel[];
    ticketAnswers: TicketingAnswerModel[];
    faqs: TicketingFaqModel[];
    operators: TicketingDepartemenOperatorModel[];
}
