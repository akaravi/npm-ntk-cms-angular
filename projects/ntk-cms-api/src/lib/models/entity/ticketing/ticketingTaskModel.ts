import { EnumTicketingDepartemenPriority } from '../../enums/enumTicketingDepartemenPriority';
import { EnumTicketStatus } from '../../enums/enumTicketStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingTaskModel extends BaseModuleEntity<number>  {
  expireDate?: string;
  title: string;
  htmlBody: string;
  priority: EnumTicketingDepartemenPriority;
  linkCmsUserId?: number;
  linkMemberUserId?: number;
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
}

