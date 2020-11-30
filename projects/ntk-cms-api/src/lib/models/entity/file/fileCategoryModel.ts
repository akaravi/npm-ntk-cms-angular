import { BaseModuleEntity } from '../base/baseModuleEntity';
import { FileContentModel } from './fileContentModel';

export class FileCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: FileCategoryModel[];
  Category: FileCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  Contents: FileContentModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
