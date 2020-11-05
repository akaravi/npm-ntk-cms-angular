import { BaseModuleEntity } from '../base/baseModuleEntity';

export class TicketingDepartemenOperatorModel extends BaseModuleEntity<number>  {
    linkDepartemenId: number;
    linkUserId: number;
    virtual_Departemen: TicketingDepartemenModel;
    departemen: TicketingDepartemenModel;
    answers: TicketingAnswerModel[];
}
