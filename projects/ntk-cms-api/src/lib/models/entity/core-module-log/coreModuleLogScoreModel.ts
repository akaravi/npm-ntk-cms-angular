import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {
    LinkUserId?: number;
    LinkMemberUserId?: number;
    ModuleName: string;
    ModuleEntityName: string;
    ModuleEntityId: number;
    ScorePercent: number;
}

