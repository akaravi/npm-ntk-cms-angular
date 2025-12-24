
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212191
/**
 * محدوده کاری آژانس در یک موقعیت مکانی.
 */
export class EstateAccountAgencyWorkAreaModel extends BaseModuleEntity<string> {
  /** شناسه آژانس. */
  linkEstateAccountAgencyId: string;
  /** شناسه موقعیت مکانی. */
  linkCoreLocationId: number;
}
