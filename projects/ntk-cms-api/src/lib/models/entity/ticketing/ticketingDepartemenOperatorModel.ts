import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingDepartemenOperatorModel extends BaseModuleEntity<number>  {
    LinkDepartemenId: number;
    LinkUserId: number;
    // tslint:disable-next-line: variable-name
    virtual_Departemen: TicketingDepartemenModel;
    Departemen: TicketingDepartemenModel;
    Answers: TicketingAnswerModel[];
}
