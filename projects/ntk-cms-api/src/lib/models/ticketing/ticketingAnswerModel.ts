import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingAnswerModel  extends BaseModuleEntity<number> {

    linkTicketId: number;
    htmlBody: string;
    virtual_Ticket: TicketingTaskModel;
    ticket: TicketingTaskModel;
    linkTicketingDepartemenId?: number;
    virtual_Departemen: TicketingDepartemenModel;
    departemen: TicketingDepartemenModel;
    linkTypeOperatorId?: number;
    virtual_DepartemenOperator: TicketingDepartemenOperatorModel;
    departemenOperator: TicketingDepartemenOperatorModel;
    linkFileIds: string;
    linkFileIdsSrc: string[];
}
