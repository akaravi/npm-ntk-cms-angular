import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingFaqModel extends BaseModuleEntity<number>  {
    question: string;
    answer: string;
    linkTicketingDepartemenId?: number;
    virtual_TicketingDepartemen: TicketingDepartemenModel;
    ticketingDepartemen: TicketingDepartemenModel;
    linkFileIds: string;
}

