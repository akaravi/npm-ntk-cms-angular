import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleLogFavoriteModel extends BaseModuleEntity<string> {

    moduleName: string;
    moduleEntityName: string;
    linkUserId?: number;
    linkMemberUserId?: number;
    entityId: number;
}
