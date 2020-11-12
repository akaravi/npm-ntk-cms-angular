
import { BaseEntity } from '../base/baseEntity';
import { CoreCpMainMenuModel } from './coreCpMainMenuModel';
import { CoreUserGroupModel } from './coreUserGroupModel';
export class CoreCpMainMenuCmsUserGroupModel extends BaseEntity<number> {
  // tslint:disable-next-line: variable-name
  CmsCpMainMenu_Id: number;
  // tslint:disable-next-line: variable-name
  CmsUserGroup_Id: number;
  CmsCpMainMenu: CoreCpMainMenuModel;
  CmsUserGroup: CoreUserGroupModel;

}
