import { EnumTicketingDepartemenPriority } from '../../enums/enumTicketingDepartemenPriority';
import { EnumTicketStatus } from '../../enums/enumTicketStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';

export class TicketingTaskModel extends BaseModuleEntity<number>  {
  ExpireDate?: Date;
  Title: string;
  HtmlBody: string;
  FullName: string;
  PhoneNo: string;
  Email: string;
  priority: EnumTicketingDepartemenPriority;
  LinkCmsUserId?: number;
  LinkMemberUserId?: number;
  LinkTicketingDepartemenId?: number;
  TicketStatus: EnumTicketStatus;
  UserIpAddress: string;
  DeviceInformation: string;
  // tslint:disable-next-line: variable-name
  virtual_Departemen: TicketingDepartemenModel;
  Departemen: TicketingDepartemenModel;
  LinkOperatorId?: number;
  Answers: TicketingAnswerModel[];
  TicketingDepartemenDefaultAnswerBody: string;
  LinkFileIds: string;
  LinkFileIdsSrc: string[];
}

