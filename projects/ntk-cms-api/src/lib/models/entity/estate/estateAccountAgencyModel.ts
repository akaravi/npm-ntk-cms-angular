import { EnumRecordStatus } from '../../enums/enumRecordStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';

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
}
