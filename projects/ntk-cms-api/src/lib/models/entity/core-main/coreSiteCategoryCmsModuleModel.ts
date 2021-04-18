import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreModuleModel } from './coreModuleModel';
import { BaseEntity } from '../base/baseEntity';
export class CoreSiteCategoryCmsModuleModel  extends BaseEntity<number> {

  LinkCmsSiteCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSiteCategory: CoreSiteCategoryModel;
  VmsSiteCategory: CoreSiteCategoryModel;
  LinkCmsModuleId: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  CmsModule: CoreModuleModel;
  ConfigValuesJson: string;
}
