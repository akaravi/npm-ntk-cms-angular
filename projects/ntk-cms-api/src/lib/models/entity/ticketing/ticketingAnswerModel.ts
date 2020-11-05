import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingAnswerModel  extends BaseModuleEntity<number> {

    linkTicketId: number;
    htmlBody: string;
    // tslint:disable-next-line: variable-name
    virtual_Ticket: TicketingTaskModel;
    ticket: TicketingTaskModel;
    linkTicketingDepartemenId?: number;
    // tslint:disable-next-line: variable-name
    virtual_Departemen: TicketingDepartemenModel;
    departemen: TicketingDepartemenModel;
    linkTypeOperatorId?: number;
    // tslint:disable-next-line: variable-name
    virtual_DepartemenOperator: TicketingDepartemenOperatorModel;
    departemenOperator: TicketingDepartemenOperatorModel;
    linkFileIds: string;
    linkFileIdsSrc: string[];
}
