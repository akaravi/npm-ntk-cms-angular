import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';

export class ApplicationLayoutModel extends BaseModuleEntity<number>  {
  Title: string;
  LinkMainImageId ?: number;
  ClassName: string;
  LinkSourceId ?: number;
  // tslint:disable-next-line: variable-name
  virtual_Source: ApplicationSourceModel;
  Source: ApplicationSourceModel;
  JsonFormDefaultValue: string;
  JsonFormAdminSystemValue: string;
  LinkModuleFilePreviewImageId ?: number;
  LayoutValues: ApplicationLayoutValueModel[];
}
