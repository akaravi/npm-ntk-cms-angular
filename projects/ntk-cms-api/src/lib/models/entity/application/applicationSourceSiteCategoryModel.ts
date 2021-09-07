import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationSourceSiteCategoryModel extends BaseModuleEntity<number>  {
  LinkSourceId: number;
  LinkSiteCagegoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  Source: ApplicationSourceModel;
}
