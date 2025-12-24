
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212191
/**
 * ارتباط کارشناس با آژانس و تنظیم دسترسی‌های اشتراک.
 */
export class EstateAccountAgencyExpertModel extends BaseModuleEntity<string> {
  /** شناسه آژانس. */
  linkEstateAccountAgencyId: string;
  /** شناسه کارشناس. */
  linkEstateExpertId: string;
  /** اجازه اشتراک آژانس با کاربر. */
  accessShareAgencyToUser: boolean;
  /** اجازه اشتراک کاربر با آژانس. */
  accessShareUserToAgency: boolean;
}
