import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupModel } from './coreUserClaimGroupModel';
import { CoreUserClaimTypeModel } from './coreUserClaimTypeModel';

export class CoreUserClaimGroupDetailModel extends BaseEntity<number> {
  linkUserClaimGroupId: number;
  linkUserClaimTypeId: number;
  isRequired: boolean;
  // tslint:disable-next-line: variable-name
  virtual_UserClaimGroup: CoreUserClaimGroupModel;
  // tslint:disable-next-line: variable-name
  virtual_UserClaimType: CoreUserClaimTypeModel;
}
