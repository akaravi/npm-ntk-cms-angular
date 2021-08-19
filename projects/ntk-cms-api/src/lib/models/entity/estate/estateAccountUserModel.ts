import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountUserModel extends BaseModuleEntity<string> {
  LinkCmsUserId: number;
  Title: string;
  Description: string;
  JoinId: string;
  LinkLocationId?: number;
  Geolocationlatitude?: number;
  Geolocationlongitude?: number;
  DateManufacture?: Date;
  PlaceProduction: string;
  SerialRfId: string;
  SerialNumber: string;
  Address: string;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
