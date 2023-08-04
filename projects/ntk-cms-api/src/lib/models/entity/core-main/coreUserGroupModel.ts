import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { CoreSiteUserModel } from './coreSiteUserModel';
import { CoreCpMainMenuCmsUserGroupModel } from './coreCpMainMenuCmsUserGroupModel';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreUserGroupModel extends BaseEntity<number>  {
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


