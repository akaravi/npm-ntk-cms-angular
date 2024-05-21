import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CatalogCategoryModel extends BaseModuleEntity<string> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: string;
  children: CatalogCategoryModel[];
  category: CatalogCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: CatalogCategoryModel;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
