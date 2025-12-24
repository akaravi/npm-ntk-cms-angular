import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailValueModel } from './memberPropertyDetailValueModel';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
/**
 * تاریخچه عضو
 */
export class MemberHistoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;

  /** لیست مقادیر جزئیات ویژگی */
  propertyDetailValues: MemberPropertyDetailValueModel[];

  /** فایل های پیوست */
  linkFileIds: string;
  /** لینک به شناسه ویژگی عضو */
  linkPropertyId: number;

  // tslint:disable-next-line: variable-name
  virtual_Property: MemberPropertyModel;

}
