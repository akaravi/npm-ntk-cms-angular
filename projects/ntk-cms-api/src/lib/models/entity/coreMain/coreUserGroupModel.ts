import { EnumManageUserAccessControllerTypes } from '../../Enums/enumManageUserAccessControllerTypes';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreCpMainMenuCmsUserGroupModel } from './coreCpMainMenuCmsUserGroupModel';
import { BaseEntity } from '../base/baseEntity';
export class CoreUserGroupModel  extends BaseEntity<number>  {

    TitleML: string;

    Title: string;
    titleResourceLanguage: string;
    description: string;
    userType: EnumManageUserAccessControllerTypes;
    userTypeTitle: string;
    userTypeDescription: string;
    cmsSiteUsers: CoreSiteUserModel[];
    cmsCpMainMenuCmsUserGroup: CoreCpMainMenuCmsUserGroupModel[];
}


