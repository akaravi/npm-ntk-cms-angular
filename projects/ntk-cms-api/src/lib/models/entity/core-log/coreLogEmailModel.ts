import { SendEmailStatusTypeEnum } from '../../enums/base/sendEmailStatusTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogEmailModel extends BaseEntity<string> {
  sendStatusType: SendEmailStatusTypeEnum;
  linkSiteId?: number;
  linkUserId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;

  isHtml: boolean;
  fromEmail: string;
  toEmail: string;
  emailTitle: string;
  emailBody: string;
  apiNumber?: number;
  returnApi: string;
}
