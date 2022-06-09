import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountUserModel extends BaseModuleEntity<string> {
  linkCmsUserId: number;
  title: string;
  description: string;
  joinId: string;
  linkLocationId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  dateManufacture?: Date;
  placeProduction: string;
  serialRfId: string;
  serialNumber: string;
  phoneNumber: string;
  address: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;


}
