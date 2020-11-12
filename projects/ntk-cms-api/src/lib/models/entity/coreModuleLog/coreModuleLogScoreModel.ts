import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogScoreModel extends BaseModuleEntity<string> {
    ModuleName: string;
    ModuleEntityName: string;
    LinkUserId?: number;
    LinkMemberUserId?: number;
    EntityId: number;
    ScorePercent: number;
}

