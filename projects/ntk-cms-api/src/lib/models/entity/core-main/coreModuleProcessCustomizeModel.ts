import { BaseEntity } from '../base/baseEntity';
import { CoreModuleProcessModel } from './coreModuleProcessModel';
//@@tag-Version-2201011
export class CoreModuleProcessCustomizeModel extends BaseEntity<number> {
  title: string;
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

