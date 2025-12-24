import { GenderTypeEnum } from '../../enums/base/genderTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyModel } from './memberPropertyModel';
import { MemberUserGroupModel } from './memberUserGroupModel';
import { MemberUserSiteModel } from './memberUserSiteModel';
//@@tag-Version-2201011
/**
 * کاربر عضو
 */
export class MemberUserModel extends BaseModuleEntity<number> {
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId?: number;
  /** شناسه دستگاه */
  deviceId: string;
  /** برای اتصال پرونده به کاربر */
  joinId: string;
  /** جنسیت */
  gender: GenderTypeEnum;
  /** نام */
  firstName: string;
  /** نام خانوادگی */
  lastName: string;
  /** لینک به شناسه موقعیت جغرافیایی */
  linkLocationId?: number;
  /** تاریخ تولد */
  dateBirth?: Date;
  /** محل تولد */
  birthPlace: string;
  /** کد ملی */
  nationalCode: string;
  /** ایمیل */
  email: string;
  /** تلفن همراه */
  mobileNo: string;
  /** تلفن */
  phoneNo: string;
  /** تلفن شرکت */
  officeNo: string;
  /** آدرس */
  address: string;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** فایل های پیوست */
  linkFileIds: string;
  /** موقعیت عرض جغرافیایی */
  geolocationlatitude?: number;
  /** موقعیت طول جغرافیایی */
  geolocationlongitude?: number;
  /** آیدی اینستاگرام */
  instagramId: string;
  /** آیدی تلگرام */
  telegramId: string;
  /** دیگر اطلاعات اضافه 1 */
  otherInfo1: string;
  /** دیگر اطلاعات اضافه 2 */
  otherInfo2: string;
  /** دیگر اطلاعات اضافه 3 */
  otherInfo3: string;
  /** دیگر اطلاعات اضافه 4 */
  otherInfo4: string;
  /** دیگر اطلاعات اضافه 5 */
  otherInfo5: string;
  /** دیگر اطلاعات اضافه 6 */
  otherInfo6: string;
  /** دیگر اطلاعات اضافه 7 */
  otherInfo7: string;
  /** دیگر اطلاعات اضافه 8 */
  otherInfo8: string;
  /** دیگر اطلاعات اضافه 9 */
  otherInfo9: string;
  /** دیگر اطلاعات اضافه 10 */
  otherInfo10: string;
  /** عنوان موقعیت جغرافیایی */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت جغرافیایی */
  linkLocationIdParentTitle: string;

  /** لیست گروه‌های کاربر عضو */
  memberUserGroup: MemberUserGroupModel[];
  /** لیست ویژگی‌های عضو */
  memberPropertes: MemberPropertyModel[];
  /** لیست سایت‌های کاربر عضو */
  memberUserSites: MemberUserSiteModel[];

}
