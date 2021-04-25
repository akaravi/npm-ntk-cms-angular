import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimTypeModel } from './coreUserClaimTypeModel';
import { CoreUserModel } from './coreUserModel';

export class CoreUserClaimModel extends BaseEntity<number> {
  LinkUserId: number;
  // tslint:disable-next-line: variable-name
  virtual_CoreUser: CoreUserModel;
  LinkUserIdApprover?: number;
  LinkSiteId?: number;
  IsApproved: boolean;
  ApprovedResult: string;
  Claim: string;
  ClaimDescription: string;
  LinkFileContentId?: number;
  LinkFileContentIdSrc: string;
  ApproveDate: Date;
  ExpireDate?: Date;
  LinkUserClaimTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_UserClaimType: CoreUserClaimTypeModel;
}
