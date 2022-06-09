import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyShareAgencyModel extends BaseModuleEntity<string> {
    linkEstateAgencyId: string;
    linkEstatePropertyId: string;
}
