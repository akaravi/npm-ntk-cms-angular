import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
//@@tag-Version-2201011
export class CoreSiteCategoryCmsModuleModel extends BaseEntity<number> {

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
