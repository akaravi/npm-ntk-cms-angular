import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyShareAgentModel extends BaseModuleEntity<string> {
  LinkEstateAgentId: string;
  LinkEstatePropertyId: string;
}
