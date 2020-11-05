import { EnumTicketAccessStatus } from '../../enums/enumTicketAccessStatus';
import { EnumTicketingDepartemenPriority } from '../../enums/enumTicketingDepartemenPriority';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';

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
