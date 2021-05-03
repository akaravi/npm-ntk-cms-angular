import { BaseEntity } from '../base/baseEntity';
import { CoreUserGroupModel } from './coreUserGroupModel';
import { CoreSiteCategoryModel } from './coreSiteCategoryModel';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';

export class CoreModuleSaleHeaderGroupModel extends BaseEntity<number>  {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Description: string;
  LinkUserGroupId?: number;
  // tslint:disable-next-line: variable-name
  virtual_UserGroup: CoreUserGroupModel;
  LinkCmsSiteCategoryId?: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteCategory: CoreSiteCategoryModel;
  Headers: CoreModuleSaleHeaderModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
