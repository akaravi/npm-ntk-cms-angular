import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';

export class MemberPropertyDetailGroupModel extends BaseModuleEntity<number> {
  title: string;
  iconFont: string;
  showInFormOrder: number;
  linkPropertyTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  // tslint:disable-next-line: variable-name
  virtual_PropertyDetails: MemberPropertyDetailModel[];
}
