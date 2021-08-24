import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyModel extends BaseModuleEntity<string> {
  LinkCmsUserId: number;
  Title: string;
  Description: string;
  LinkLocationId?: number;
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;

  Address: string;
  PhoneNumber: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;

  LinkExtraImageIds: string;
  LinkExtraImageIdsSrc: string[];
}
