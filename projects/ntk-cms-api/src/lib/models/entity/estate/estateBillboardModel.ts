import { BaseModuleEntity } from '../base/baseModuleEntity';
export class EstateBillboardModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  includeAllSite: boolean;
  speedView: number;
  reloadViewPerMin: number;
  linkPropertyIds: string[];
  linkLocationIds: number[];
  linkPropertyTypeLanduseIds: string[];
  linkPropertyTypeUsageIds: string[];
  linkContractTypeIds: string[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  urlViewContent: string;
  urlViewContentQRCodeBase64: string;
}

