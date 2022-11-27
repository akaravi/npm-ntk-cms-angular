import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberHistoryModel } from './memberHistoryModel';
import { MemberPropertyDetailDefaultValueModel } from './memberPropertyDetailDefaultValueModel';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
export class MemberPropertyDetailValueModel extends BaseModuleEntity<number> {
  linkPropertyId: number;
  linkPropertyDetailId: number;
  value: string;

  property: MemberPropertyModel;
  propertyDetail: MemberPropertyDetailModel;

  linkHistoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_History: MemberHistoryModel;

  propertyDetailDefaultValue: MemberPropertyDetailDefaultValueModel[];
}
