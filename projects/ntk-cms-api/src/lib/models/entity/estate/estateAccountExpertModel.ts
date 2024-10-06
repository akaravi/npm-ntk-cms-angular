import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212171
export class EstateAccountExpertModel extends BaseModuleEntity<string> {
  linkCmsUserId: number;
  title: string;
  description: string;
  descriptionHidden: string;
  joinId: string;
  linkLocationId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  linkLocationWorkAreaIds: number[];
  notificationWorkAreaEstate: boolean;
  notificationWorkAreaCustomerOrder: boolean;

  geolocationlatitude?: number;
  geolocationlongitude?: number;
  dateManufacture?: Date;
  placeProduction: string;
  serialRfId: string;
  serialNumber: string;
  phoneNumber: string;
  mobileNumber: string;
  address: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;

  accessWatchRowSite: boolean;
  accessWatchRowOtherAgency: boolean;
  accessWatchRowOtherAgent: boolean;
  accessAllowShareRowWatchOtherAgency: boolean;
  accessAllowShareRowWatchOtherAgent: boolean;
}
