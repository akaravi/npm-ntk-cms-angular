import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreUserModel } from '../core-main/coreUserModel';
import { MemberUserModel } from '../member/memberUserModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingAnswerModel extends BaseModuleEntity<number> {
  LinkMemberUserId?: number;
  LinkTicketId: number;
  HtmlBody: string;
  // tslint:disable-next-line: variable-name
  virtual_Ticket: TicketingTaskModel;
  Ticket: TicketingTaskModel;
  LinkTicketingDepartemenId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Departemen: TicketingDepartemenModel;
  Departemen: TicketingDepartemenModel;
  LinkTypeOperatorId?: number;
  // tslint:disable-next-line: variable-name
  virtual_DepartemenOperator: TicketingDepartemenOperatorModel;
  DepartemenOperator: TicketingDepartemenOperatorModel;
  LinkFileIds: string;
  LinkFileIdsSrc: string[];
  UploadFileGUID: string[];
  ModuleCoreCreatedBy: CoreUserModel;
  ModuleCoreMemberUserId: MemberUserModel;
}
