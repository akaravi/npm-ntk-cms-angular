import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberHistoryModel } from './memberHistoryModel';
import { MemberPropertyDetailDefaultValueModel } from './memberPropertyDetailDefaultValueModel';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
/**
 * مقدار جزئیات ویژگی عضو
 */
export class MemberPropertyDetailValueModel extends BaseModuleEntity<number> {
  /** لینک به شناسه ویژگی عضو */
  linkPropertyId: number;
  /** لینک به شناسه جزئیات ویژگی عضو */
  linkPropertyDetailId: number;
  /** مقدار */
  value: string;

  /** ویژگی عضو */
  property: MemberPropertyModel;
  /** جزئیات ویژگی عضو */
  propertyDetail: MemberPropertyDetailModel;

  /** لینک به شناسه تاریخچه */
  linkHistoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_History: MemberHistoryModel;

  /** مقادیر پیش‌فرض جزئیات ویژگی */
  propertyDetailDefaultValue: MemberPropertyDetailDefaultValueModel[];
}
