import { BaseEntity } from '../base/baseEntity';
import { CoreModuleProcessModel } from './coreModuleProcessModel';

export class CoreModuleProcessCustomizeModel extends BaseEntity<number> {
  Title: string;
  TitleEn: string;
  Description: string;
  LinkModuleProcessId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleProcess: CoreModuleProcessModel;
  CmsModuleProcess: CoreModuleProcessModel;
  ProcessInputCustomizeValue: string;
  ProcessInputValueForm: string;
  LinkProcessCustomizeDependenceBeforRunId?: number;
}

