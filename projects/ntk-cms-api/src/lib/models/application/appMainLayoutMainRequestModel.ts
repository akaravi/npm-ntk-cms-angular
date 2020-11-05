import { BaseModuleEntity } from '../base/baseModuleEntity';

export class AppMainLayoutMainRequestModel extends BaseModuleEntity<number>  {


    userId: number;
    memberUserId: number;
    siteId: number;
    appTitle: string;
    appUrl: string;
    appId: number;
    appVersion: number;
    lastUpdateSource?: string;
    lastUpdateTheme?: string;
    lastUpdateApp?: string;
    appForceUpdate: boolean;
    appThemeId?: number;
}

