import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingFaqModel extends BaseModuleEntity<number>  {
    Question: string;
    Answer: string;
    LinkTicketingDepartemenId?: number;
    // tslint:disable-next-line: variable-name
    virtual_TicketingDepartemen: TicketingDepartemenModel;
    TicketingDepartemen: TicketingDepartemenModel;
    LinkFileIds: string;
    LinkFileIdsSrc: string[];
}

