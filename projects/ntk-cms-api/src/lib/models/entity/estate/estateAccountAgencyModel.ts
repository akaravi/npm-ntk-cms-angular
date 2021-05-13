import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyModel extends BaseModuleEntity<string> {
  LinkCmsUserId: number;
  Title: string;
  Description: string;

  Geolocationlatitude?: number;
  Geolocationlongitude?: number;

  Address: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;

  LinkExtraImageIds: string;
  LinkExtraImageIdsSrc: string[];
}
