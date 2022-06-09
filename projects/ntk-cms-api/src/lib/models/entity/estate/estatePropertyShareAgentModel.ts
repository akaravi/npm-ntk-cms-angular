import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyShareAgentModel extends BaseModuleEntity<string> {
  linkEstateAgentId: string;
  linkEstatePropertyId: string;
}
