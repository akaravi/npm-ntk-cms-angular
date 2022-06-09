import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyShareSiteModel extends BaseModuleEntity<string> {
  linkCmsSiteId: number;
  linkEstatePropertyId: string;
}
