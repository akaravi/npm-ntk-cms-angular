import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleProcessCustomizeModel } from './coreModuleProcessCustomizeModel';

export class CoreModuleProcessModel extends BaseEntity<number>  {
  TitleML: string;
  Title: string;
  TitleResourceLanguage: string;
  TitleEn: string;
  ProcessName: string;
  Description: string;
  LinkModuleId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  CmsModule: CoreModuleModel;
  CmsModuleProcessCustomize: CoreModuleProcessCustomizeModel[];
}


