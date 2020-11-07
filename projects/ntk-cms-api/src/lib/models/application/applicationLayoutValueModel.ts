import { ApplicationLayoutModel } from './../entity/application/applicationLayoutModel';
import { ApplicationAppModel } from '../entity/application/applicationAppModel';
import { BaseModuleEntity } from '../entity/base/baseModuleEntity';

export class ApplicationLayoutValueModel extends BaseModuleEntity<number>  {
  linkApplicationId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Application: ApplicationAppModel;
  application: ApplicationAppModel;
  linkLayoutId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Layout: ApplicationLayoutModel;
  layout: ApplicationLayoutModel;
  jsonFormValues: string;
}
