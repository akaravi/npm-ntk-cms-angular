import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateBillboardModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  descriptionHidden: string;
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
  linkCoreCurrencyId: number;
  currencyTitle: string;
  currencySymbol:string;
}

