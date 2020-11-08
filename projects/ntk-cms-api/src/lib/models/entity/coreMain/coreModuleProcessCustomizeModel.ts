import { BaseEntity } from '../base/baseEntity';
import { CoreModuleProcessModel } from './coreModuleProcessModel';

export class CoreModuleProcessCustomizeModel extends BaseEntity<number> {
  Title: string;
  titleEn: string;
  description: string;
  linkModuleProcessId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleProcess: CoreModuleProcessModel;
  cmsModuleProcess: CoreModuleProcessModel;
  processInputCustomizeValue: string;
  processInputValueForm: string;
  linkProcessCustomizeDependenceBeforRunId?: number;
}

