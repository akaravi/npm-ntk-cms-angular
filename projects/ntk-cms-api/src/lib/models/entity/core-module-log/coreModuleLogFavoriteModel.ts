import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogFavoriteModel extends BaseModuleEntity<string> {
    ModuleName: string;
    ModuleEntityName: string;
    LinkUserId?: number;
    LinkMemberUserId?: number;
    EntityId: number;
}
