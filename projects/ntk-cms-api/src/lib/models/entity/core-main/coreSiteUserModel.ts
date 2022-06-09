import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';
import { CoreUserModel } from './coreUserModel';
import { CoreUserGroupModel } from './coreUserGroupModel';

export class CoreSiteUserModel extends BaseEntity<number>  {
  expireDate?: Date;
  linkSiteId: number;
  linkUserId: number;
  linkUserGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  cmsSite: CoreSiteModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsUser: CoreUserModel;
  cmsUser: CoreUserModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsUserGroup: CoreUserGroupModel;
  cmsUserGroup: CoreUserGroupModel;
}
