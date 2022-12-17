import { EnumRecordStatus } from '../../enums/base/enumRecordStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212171
export class EstateAccountAgencyModel extends BaseModuleEntity<string> {
  mainAdminRecordStatus = EnumRecordStatus.Pending;
  linkCmsUserId: number;
  title: string;
  description: string;
  linkLocationId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;

  address: string;
  phoneNumber: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;

  linkExtraImageIds: string;
  linkExtraImageIdsSrc: string[];

  accessWatchRowSite:boolean;
  accessWatchRowOtherAgency:boolean;
  accessWatchRowOtherAgent:boolean;
  accessAllowShareRowWatchOtherAgency:boolean;
  accessAllowShareRowWatchOtherAgent:boolean;
}
