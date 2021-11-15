import { BaseModuleEntity } from '../base/baseModuleEntity';
export class EstateBillboardModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  IncludeAllSite: boolean;
  SpeedView: number;
  ReloadViewPerMin: number;
  LinkPropertyIds: string[];
  LinkLocationIds: number[];
  LinkPropertyTypeLanduseIds: string[];
  LinkPropertyTypeUsageIds: string[];
  LinkContractTypeIds: string[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
}

