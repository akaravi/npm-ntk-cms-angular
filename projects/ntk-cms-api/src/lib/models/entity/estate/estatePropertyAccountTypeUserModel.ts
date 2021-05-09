import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyAccountTypeUserModel extends BaseModuleEntity<string> {
  // tslint:disable-next-line: variable-name
  User_Id: string;
  // tslint:disable-next-line: variable-name
  Type_Id: string;
  // tslint:disable-next-line: variable-name
  Property_Id: string;
}
