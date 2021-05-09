import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyDetailGroupModel extends BaseModuleEntity<string> {
  Title: string;
  IconFont: string;
  ShowInFormOrder?: number;
  LinkPropertyTypeId: string;
}
