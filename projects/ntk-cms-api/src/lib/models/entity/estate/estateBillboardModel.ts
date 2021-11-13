import { BaseModuleEntity } from '../base/baseModuleEntity';
export class EstateBillboardModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  SpeedView: number;
  ReloadViewPerMin: number;
  LinkPropertyIds: string[];
  LinkLocationId?: number;
  LinkPropertyTypeLanduseId: string;
  LinkPropertyTypeUsageId: string;
  LinkContractTypeId: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  UrlViewContent: string;
  UrlViewContentQRCodeBase64: string;
}

