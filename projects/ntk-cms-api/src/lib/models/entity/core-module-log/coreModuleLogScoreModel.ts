import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {
    linkUserId?: number;

    linkMemberId: string;
    moduleName: string;
    moduleEntityName: string;
    moduleEntityId: string;
    scorePercent: number;
}

