import { EnumManageUserAccessControllerTypes } from '../../enums/enumManageUserAccessControllerTypes';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreCpMainMenuCmsUserGroupModel } from './coreCpMainMenuCmsUserGroupModel';
import { BaseEntity } from '../base/baseEntity';
export class CoreUserGroupModel  extends BaseEntity<number>  {

    TitleML: string;

    Title: string;
    TitleResourceLanguage: string;
    Description: string;
    UserType: EnumManageUserAccessControllerTypes;
    UserTypeTitle: string;
    UserTypeDescription: string;
    CmsSiteUsers: CoreSiteUserModel[];
    CmsCpMainMenuCmsUserGroup: CoreCpMainMenuCmsUserGroupModel[];
}


