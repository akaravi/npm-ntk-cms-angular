import { EnumTicketAccessStatus } from '../../enums/ticketing/enumTicketAccessStatus';
import { EnumTicketingDepartemenPriority } from '../../enums/ticketing/enumTicketingDepartemenPriority';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingDepartemenModel extends BaseModuleEntity<number>  {
    Title: string;
    DefaultAnswerBody: string;
    Priority: EnumTicketingDepartemenPriority;
    AccessToChangeType: EnumTicketAccessStatus;
    Tickets: TicketingTaskModel[];
    TicketAnswers: TicketingAnswerModel[];
    Faqs: TicketingFaqModel[];
    Operators: TicketingDepartemenOperatorModel[];
    LinkMainImageId?: number;
    LinkMainImageIdSrc: string;
}
