import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreModuleModel } from './coreModuleModel';
import { BaseEntity } from '../base/baseEntity';
export class CoreSiteCategoryCmsModuleModel  extends BaseEntity<number> {

  linkCmsSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  vmsSiteCategory: CoreSiteCategoryModel;
  linkCmsModuleId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  cmsModule: CoreModuleModel;
  configValuesJson: string;
}
