import { BaseModuleEntity } from '../base/baseModuleEntity';

export class AppMainLayoutMainRequestModel extends BaseModuleEntity<number>  {


    UserId: number;
    MemberUserId: number;
    SiteId: number;
    AppTitle: string;
    AppUrl: string;
    AppId: number;
    AppVersion: number;
    LastUpdateSource?: string;
    LastUpdateTheme?: string;
    LastUpdateApp?: string;
    AppForceUpdate: boolean;
    AppThemeId?: number;
}

