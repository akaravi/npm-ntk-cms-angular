import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberGroupModel } from './memberGroupModel';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
//@@tag-Version-2201011
/**
 * نوع ویژگی عضو
 */
export class MemberPropertyTypeModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** تصویر اصلی */
  linkMainImageId: number;
  /** لیست گروه‌های عضو */
  memberGroup: MemberGroupModel[];

  /** لیست جزئیات ویژگی عضو */
  // tslint:disable-next-line: variable-name
  virtual_PropertyDetails: MemberPropertyDetailModel[];

  /** آدرس تصویر اصلی */
  linkMainImageSrc: string
}
