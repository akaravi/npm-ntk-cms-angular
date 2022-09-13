import { EnumAnswerStatus } from '../../enums/ticketing/enumAnswerStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreUserModel } from '../core-main/coreUserModel';
import { MemberUserModel } from '../member/memberUserModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingTaskModel } from './ticketingTaskModel';

export class TicketingAnswerModel extends BaseModuleEntity<number> {
  linkMemberId: string;
  linkTaskId: number;
  htmlBody: string;
  // tslint:disable-next-line: variable-name
  virtual_Ticket: TicketingTaskModel;
  answerStatus: EnumAnswerStatus;
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
  uploadFileGUID: string[];
  moduleCoreCreatedBy: CoreUserModel;
  moduleCoreMemberUserId: MemberUserModel;
}
