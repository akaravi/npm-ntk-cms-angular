import { BaseEntity } from '../base/baseEntity';

export class CoreLogErrorModel extends BaseEntity<string>{
    ModuleName: string;
    ModuleEntityName: string;
    LinkUserId?: number;
    LinkMemberUserId?: number;
    EntityId: number;
    Description: string;
}
