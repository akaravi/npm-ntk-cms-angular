import { AnswerStatusEnum } from '../../enums/ticketing/answerStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreUserModel } from '../core-main/coreUserModel';
import { MemberUserModel } from '../member/memberUserModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
import { TicketingDepartemenOperatorModel } from './ticketingDepartemenOperatorModel';
import { TicketingTaskModel } from './ticketingTaskModel';
//@@tag-Version-2201011
/**
 * مدل پاسخ تیکت
 */
export class TicketingAnswerModel extends BaseModuleEntity<number> {
  /** لینک به شناسه عضو */
  linkMemberId: string;
  /** لینک به شناسه کار */
  linkTaskId: number;
  /** متن HTML */
  htmlBody: string;
  /** تیکت (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Ticket: TicketingTaskModel;
  /** وضعیت پاسخ */
  answerStatus: AnswerStatusEnum;
  /** تیکت */
  ticket: TicketingTaskModel;
  /** لینک به شناسه دپارتمان تیکت */
  linkTicketingDepartemenId?: number;
  /** دپارتمان (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Departemen: TicketingDepartemenModel;
  /** دپارتمان */
  departemen: TicketingDepartemenModel;
  /** لینک به شناسه اپراتور */
  linkTypeOperatorId?: number;
  /** اپراتور دپارتمان (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_DepartemenOperator: TicketingDepartemenOperatorModel;
  /** اپراتور دپارتمان */
  departemenOperator: TicketingDepartemenOperatorModel;
  /** لینک به شناسه فایل‌ها */
  linkFileIds: string;
  /** آدرس‌های فایل‌ها */
  linkFileIdsSrc: string[];
  /** GUID فایل‌های آپلود شده */
  uploadFileGUID: string[];
  /** کاربر ایجادکننده */
  moduleCoreCreatedBy: CoreUserModel;
  /** کاربر عضو */
  moduleCoreMemberUserId: MemberUserModel;
}
