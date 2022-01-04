import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimTypeModel } from './coreUserClaimTypeModel';
import { CoreUserModel } from './coreUserModel';

export class CoreUserClaimContentModel extends BaseEntity<number> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Description: string;
  LinkUserId: number;
  LinkSiteId?: number;
  LinkUserIdApprover?: number;
  // tslint:disable-next-line: variable-name
  virtual_CoreUser: CoreUserModel;
  IsApproved: boolean;
  ApprovedResult: string;
  ApproveCheckDate: Date;
  LinkFileContentId?: number;
  LinkFileContentIdSrc: string;
  ExpireDate?: Date;
  LinkUserClaimTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_UserClaimType: CoreUserClaimTypeModel;
}
