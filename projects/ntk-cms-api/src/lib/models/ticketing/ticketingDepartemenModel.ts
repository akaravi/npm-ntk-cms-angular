import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingDepartemenModel extends BaseModuleEntity<number>  {
    title: string;
    defaultAnswerBody: string;
    priority: EnumTicketingDepartemenPriority;
    accessToChangeType: EnumTicketAccessStatus;
    tickets: TicketingTaskModel[];
    ticketAnswers: TicketingAnswerModel[];
    faqs: TicketingFaqModel[];
    operators: TicketingDepartemenOperatorModel[];
}
