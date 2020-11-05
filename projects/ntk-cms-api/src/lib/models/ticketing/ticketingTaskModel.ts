import { BaseModuleEntity } from '../base/baseModuleEntity';

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
  virtual_Departemen: TicketingDepartemenModel;
  departemen: TicketingDepartemenModel;
  linkOperatorId?: number;
  answers: TicketingAnswerModel[];
  ticketingDepartemenDefaultAnswerBody: string;
  linkFileIds: string;
  linkFileIdsSrc: string[];
}

