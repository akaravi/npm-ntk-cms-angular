import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationSourceSiteCategoryModel extends BaseModuleEntity<number>  {
  linkSourceId: number;
  linkSiteCagegoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
}
