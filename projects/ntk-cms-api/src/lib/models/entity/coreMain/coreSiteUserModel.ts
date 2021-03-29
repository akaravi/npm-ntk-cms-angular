import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';
import { CoreUserModel } from './coreUserModel';
import { CoreUserGroupModel } from './coreUserGroupModel';

export class CoreSiteUserModel extends BaseEntity<number>  {
  ExpireDate?: Date;
  LinkSiteId: number;
  LinkUserId: number;
  LinkUserGroupId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  CmsSite: CoreSiteModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsUser: CoreUserModel;
  CmsUser: CoreUserModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsUserGroup: CoreUserGroupModel;
  CmsUserGroup: CoreUserGroupModel;
}
