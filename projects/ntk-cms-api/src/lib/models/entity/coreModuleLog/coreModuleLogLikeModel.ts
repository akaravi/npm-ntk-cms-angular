import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogLikeModel  extends BaseModuleEntity<string> {


    moduleName: string;
    moduleEntityName: string;
    linkUserId?: number;
    linkMemberUserId?: number;
    entityId: number;
    likked: boolean;
    existBeforAndChangeNow: boolean;
}
