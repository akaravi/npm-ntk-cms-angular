import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimTypeModel } from './coreUserClaimTypeModel';
import { CoreUserModel } from './coreUserModel';

export class CoreUserClaimContentModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  linkUserId: number;
  linkSiteId?: number;
  linkUserIdApprover?: number;
  // tslint:disable-next-line: variable-name
  virtual_CoreUser: CoreUserModel;
  isApproved: boolean;
  approvedResult: string;
  approveCheckDate: Date;
  linkFileContentId?: number;
  linkFileContentIdSrc: string;
  expireDate?: Date;
  linkUserClaimTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_UserClaimType: CoreUserClaimTypeModel;
}
