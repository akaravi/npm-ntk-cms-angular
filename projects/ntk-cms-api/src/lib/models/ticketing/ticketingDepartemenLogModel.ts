import { BaseModuleEntity } from '../base/baseModuleEntity';

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
