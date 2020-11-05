import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingDepartemenOperatorModel extends BaseModuleEntity<number>  {
    linkDepartemenId: number;
    linkUserId: number;
    // tslint:disable-next-line: variable-name
    virtual_Departemen: TicketingDepartemenModel;
    departemen: TicketingDepartemenModel;
    answers: TicketingAnswerModel[];
}
