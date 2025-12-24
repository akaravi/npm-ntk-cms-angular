
import { TicketingDepartemenPriorityEnum } from '../../enums/ticketing/ticketingDepartemenPriorityEnum';
import { TicketStatusEnum } from '../../enums/ticketing/ticketStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreUserModel } from '../core-main/coreUserModel';
import { MemberUserModel } from '../member/memberUserModel';
import { TicketingAnswerModel } from './ticketingAnswerModel';
import { TicketingDepartemenModel } from './ticketingDepartemenModel';
//@@tag-Version-2201011
/**
 * مدل کار تیکت
 */
export class TicketingTaskModel extends BaseModuleEntity<number> {
  /** تاریخ انقضا */
  expireDate?: Date;
  /** عنوان */
  title: string;
  /** متن HTML */
  htmlBody: string;
  /** نام کامل */
  fullName: string;
  /** شماره تلفن */
  phoneNo: string;
  /** ایمیل */
  email: string;
  /** اولویت در پاسخگویی */
  priority: TicketingDepartemenPriorityEnum;
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId?: number;
  /** لینک به شناسه عضو */
  linkMemberId: string;
  /** لینک به شناسه دپارتمان تیکت */
  linkTicketingDepartemenId?: number;
  /** وضعیت تیکت */
  ticketStatus: TicketStatusEnum;
  /** آدرس IP کاربر */
  userIpAddress: string;
  /** اطلاعات دستگاه */
  deviceInformation: string;
  /** دپارتمان (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Departemen: TicketingDepartemenModel;
  /** دپارتمان */
  departemen: TicketingDepartemenModel;
  /** لینک به شناسه اپراتور */
  linkOperatorId?: number;
  /** لیست پاسخ‌ها */
  answers: TicketingAnswerModel[];
  /** جواب پیش‌فرض دپارتمان تیکت */
  ticketingDepartemenDefaultAnswerBody: string;
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

