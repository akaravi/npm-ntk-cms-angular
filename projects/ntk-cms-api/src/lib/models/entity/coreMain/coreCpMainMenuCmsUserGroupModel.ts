
import { BaseEntity } from '../base/baseEntity';
import { CoreCpMainMenuModel } from './coreCpMainMenuModel';
import { CoreUserGroupModel } from './coreUserGroupModel';
export class CoreCpMainMenuCmsUserGroupModel extends BaseEntity<number> {
  // tslint:disable-next-line: variable-name
  cmsCpMainMenu_Id: number;
  // tslint:disable-next-line: variable-name
  cmsUserGroup_Id: number;
  cmsCpMainMenu: CoreCpMainMenuModel;
  cmsUserGroup: CoreUserGroupModel;

}
