
import { EnumTicketingDepartemenPriority } from '../../enums/ticketing/enumTicketingDepartemenPriority';
import { EnumTicketStatus } from '../../enums/ticketing/enumTicketStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreUserModel } from '../core-main/coreUserModel';
import { MemberUserModel } from '../member/memberUserModel';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingTaskModel extends BaseModuleEntity<number>  {
  expireDate?: Date;
  title: string;
  htmlBody: string;
  fullName: string;
  phoneNo: string;
  email: string;
  priority: EnumTicketingDepartemenPriority;
  linkCmsUserId?: number;
  linkMemberId: string;
  linkTicketingDepartemenId?: number;
  ticketStatus: EnumTicketStatus;
  userIpAddress: string;
  deviceInformation: string;
  // tslint:disable-next-line: variable-name
  virtual_Departemen: TicketingDepartemenModel;
  departemen: TicketingDepartemenModel;
  linkOperatorId?: number;
  answers: TicketingAnswerModel[];
  ticketingDepartemenDefaultAnswerBody: string;
  linkFileIds: string;
  linkFileIdsSrc: string[];
  uploadFileGUID: string[];
  moduleCoreCreatedBy: CoreUserModel;
  moduleCoreMemberUserId: MemberUserModel;
}

