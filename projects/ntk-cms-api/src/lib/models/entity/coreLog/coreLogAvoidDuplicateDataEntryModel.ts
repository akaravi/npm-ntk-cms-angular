import { BaseEntity } from '../base/baseEntity';

export class CoreLogAvoidDuplicateDataEntryModel extends BaseEntity<string>{
    ModuleName: string;
    ModuleEntityName: string;
    LinkUserId?: number;
    LinkMemberUserId?: number;
    EntityId: number;
}

