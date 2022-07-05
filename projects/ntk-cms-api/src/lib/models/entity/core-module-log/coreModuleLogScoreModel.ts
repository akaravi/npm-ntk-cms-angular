import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {
    linkUserId?: number;
    linkMemberUserId?: number;
    moduleName: string;
    moduleEntityName: string;
    moduleEntityId: string;
    scorePercent: number;
}

