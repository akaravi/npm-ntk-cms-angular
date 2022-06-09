import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyAccountTypeUserModel extends BaseModuleEntity<string> {
  // tslint:disable-next-line: variable-name
  user_Id: string;
  // tslint:disable-next-line: variable-name
  type_Id: string;
  // tslint:disable-next-line: variable-name
  property_Id: string;
}
