import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationLayoutModel extends BaseModuleEntity<number>  {
  title: string;
  linkMainImageId ?: number;
  className: string;
  linkSourceId ?: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
  jsonFormDefaultValue: string;
  jsonFormAdminSystemValue: string;
  linkModuleFilePreviewImageId ?: number;
  layoutValues: ApplicationLayoutValueModel[];
}
