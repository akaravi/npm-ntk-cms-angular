import { ApplicationLayoutModel } from './../entity/application/applicationLayoutModel';
import { ApplicationAppModel } from '../entity/application/applicationAppModel';
import { BaseModuleEntity } from '../entity/base/baseModuleEntity';

export class ApplicationLayoutValueModel extends BaseModuleEntity<number>  {
  LinkApplicationId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Application: ApplicationAppModel;
  Application: ApplicationAppModel;
  LinkLayoutId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Layout: ApplicationLayoutModel;
  Layout: ApplicationLayoutModel;
  JsonFormValues: string;
}
