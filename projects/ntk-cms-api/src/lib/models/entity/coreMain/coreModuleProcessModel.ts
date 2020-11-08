import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleProcessCustomizeModel } from './coreModuleProcessCustomizeModel';

export class CoreModuleProcessModel extends BaseEntity<number>  {
  TitleML: string;
  Title: string;
  titleResourceLanguage: string;
  titleEn: string;
  processName: string;
  description: string;
  linkModuleId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  cmsModule: CoreModuleModel;
  cmsModuleProcessCustomize: CoreModuleProcessCustomizeModel[];
}


