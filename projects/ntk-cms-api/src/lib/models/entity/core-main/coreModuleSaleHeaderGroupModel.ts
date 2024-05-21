import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreUserGroupModel } from './coreUserGroupModel';
//@@tag-Version-2201011
export class CoreModuleSaleHeaderGroupModel extends BaseEntity<number> {
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
