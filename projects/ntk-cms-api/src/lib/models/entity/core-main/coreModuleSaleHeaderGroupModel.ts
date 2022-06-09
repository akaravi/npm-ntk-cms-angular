import { BaseEntity } from '../base/baseEntity';
import { CoreUserGroupModel } from './coreUserGroupModel';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';

export class CoreModuleSaleHeaderGroupModel extends BaseEntity<number>  {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  linkUserGroupId?: number;
  // tslint:disable-next-line: variable-name
  virtual_UserGroup: CoreUserGroupModel;
  linkCmsSiteCategoryId?: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteCategory: CoreSiteCategoryModel;
  headers: CoreModuleSaleHeaderModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
