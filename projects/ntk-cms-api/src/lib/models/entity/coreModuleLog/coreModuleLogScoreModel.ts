import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {

    moduleName: string;
    moduleEntityName: string;
    linkUserId?: number;
    linkMemberUserId?: number;
    entityId: number;
    scorePercent: number;

}

