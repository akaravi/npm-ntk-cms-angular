import { TicketAccessStatusEnum } from '../../enums/ticketing/ticketAccessStatusEnum';
import { TicketingDepartemenPriorityEnum } from '../../enums/ticketing/ticketingDepartemenPriorityEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingFaqModel } from './ticketingFaqModel';
import { TicketingTaskModel } from './ticketingTaskModel';
//@@tag-Version-2201011
export class TicketingDepartemenModel extends BaseModuleEntity<number> {
    title: string;
    defaultAnswerBody: string;
    priority: TicketingDepartemenPriorityEnum;
    accessToChangeType: TicketAccessStatusEnum;
    tickets: TicketingTaskModel[];
    ticketAnswers: TicketingAnswerModel[];
    faqs: TicketingFaqModel[];
    operators: TicketingDepartemenOperatorModel[];
    linkMainImageId?: number;
    linkMainImageIdSrc: string;
}
