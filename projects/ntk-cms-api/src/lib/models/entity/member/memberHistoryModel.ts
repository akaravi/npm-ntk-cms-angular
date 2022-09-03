import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailValueModel } from './memberPropertyDetailValueModel';
import { MemberPropertyModel } from './memberPropertyModel';

export class MemberHistoryModel extends BaseModuleEntity<number> {
  title: string;

  propertyDetailValues: MemberPropertyDetailValueModel[];

  linkFileIds: string;
  linkPropertyId: number;

  // tslint:disable-next-line: variable-name
  virtual_Property: MemberPropertyModel;

}
