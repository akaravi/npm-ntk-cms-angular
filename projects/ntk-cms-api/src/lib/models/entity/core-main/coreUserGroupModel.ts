import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { BaseEntity } from '../base/baseEntity';
import { CoreCpMainMenuCmsUserGroupModel } from './coreCpMainMenuCmsUserGroupModel';
import { CoreSiteUserModel } from './coreSiteUserModel';
//@@tag-Version-2201011
export class CoreUserGroupModel extends BaseEntity<number> {
    titleML: string;
    title: string;
    titleResourceLanguage: string;
    description: string;
    userType: ManageUserAccessUserTypesEnum;
    userTypeTitle: string;
    userTypeDescription: string;
    cmsSiteUsers: CoreSiteUserModel[];
    cmsCpMainMenuCmsUserGroup: CoreCpMainMenuCmsUserGroupModel[];
}


