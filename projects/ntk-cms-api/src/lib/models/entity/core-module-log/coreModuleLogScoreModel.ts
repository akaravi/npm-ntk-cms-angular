import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {
    linkUserId?: number;

    linkMemberId: string;
    moduleName: string;
    moduleEntityName: string;
    moduleEntityId: string;
    scorePercent: number;
}

