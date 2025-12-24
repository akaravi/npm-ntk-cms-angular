
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212191
/**
 * محدوده کاری کارشناس ملک در یک موقعیت مکانی.
 */
export class EstateAccountExpertWorkAreaModel extends BaseModuleEntity<string> {
  /** شناسه کارشناس. */
  linkEstateExpertId: string;
  /** شناسه موقعیت مکانی. */
  linkCoreLocationId: number;
}
