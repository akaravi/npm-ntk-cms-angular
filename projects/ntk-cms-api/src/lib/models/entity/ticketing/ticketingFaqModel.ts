import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingFaqModel extends BaseModuleEntity<number>  {
    question: string;
    answer: string;
    linkTicketingDepartemenId?: number;
    // tslint:disable-next-line: variable-name
    virtual_TicketingDepartemen: TicketingDepartemenModel;
    ticketingDepartemen: TicketingDepartemenModel;
    linkFileIds: string;
    linkFileIdsSrc: string[];
}

