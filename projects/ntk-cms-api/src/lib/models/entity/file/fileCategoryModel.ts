import { BaseModuleEntity } from '../base/baseModuleEntity';
import { FileContentModel } from './fileContentModel';
//@@tag-Version-2201011
export class FileCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: FileCategoryModel[];
  category: FileCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  contents: FileContentModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
