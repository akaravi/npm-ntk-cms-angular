import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ اطلاعات عضو وب دیزاینر
 */
export class WebDesignerLogMemberInfoModel extends BaseModuleEntity<string> {
  /** لینک به شناسه کاربر */
  linkUserId?: number;
  /** شناسه دستگاه */
  deviceId: string;
  /** آدرس IP دستگاه */
  deviceIP: string;
  /** زبان */
  language: string;
  /** شناسه اعلان */
  notificationId: string;
  /** لینک به شناسه موقعیت */
  linkLocationId?: number;
  /** عرض جغرافیایی */
  geolocationlatitude?: number;
  /** طول جغرافیایی */
  geolocationlongitude?: number;
  /** عنوان موقعیت */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت */
  linkLocationIdParentTitle: string;
}
