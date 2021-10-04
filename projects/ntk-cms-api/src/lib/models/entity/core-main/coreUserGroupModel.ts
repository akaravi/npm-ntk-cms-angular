import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreCpMainMenuCmsUserGroupModel } from './coreCpMainMenuCmsUserGroupModel';
import { BaseEntity } from '../base/baseEntity';
export class CoreUserGroupModel  extends BaseEntity<number>  {
    TitleML: string;
    Title: string;
    TitleResourceLanguage: string;
    Description: string;
    UserType: EnumManageUserAccessUserTypes;
    UserTypeTitle: string;
    UserTypeDescription: string;
    CmsSiteUsers: CoreSiteUserModel[];
    CmsCpMainMenuCmsUserGroup: CoreCpMainMenuCmsUserGroupModel[];
}


