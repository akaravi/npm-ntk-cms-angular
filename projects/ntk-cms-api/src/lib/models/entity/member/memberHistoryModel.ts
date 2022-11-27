import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailValueModel } from './memberPropertyDetailValueModel';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
export class MemberHistoryModel extends BaseModuleEntity<number> {
  title: string;

  propertyDetailValues: MemberPropertyDetailValueModel[];

  linkFileIds: string;
  linkPropertyId: number;

  // tslint:disable-next-line: variable-name
  virtual_Property: MemberPropertyModel;

}
