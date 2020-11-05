import { BaseModuleEntity } from '../base/baseModuleEntity';

export class ApplicationLayoutModel extends BaseModuleEntity<number>  {
  title: string;
  linkMainImageId ?: number;
  className: string;
  linkSourceId ?: number;
  virtual_Source: ApplicationSourceModel;
  source: ApplicationSourceModel;
  jsonFormDefaultValue: string;
  jsonFormAdminSystemValue: string;
  linkModuleFilePreviewImageId ?: number;
  layoutValues: ApplicationLayoutValueModel[];
}
