import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourceCategoryModel } from './dataProviderSourceCategoryModel';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل اتصال مسیر Source به دسته‌بندی Source DataProvider
 */
export class DataProviderSourcePathAndCategoryModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر Source */
  linkSourcePathId: string;
  /** مسیر Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourcePath: DataProviderSourcePathModel;
  /** مسیر Source */
  sourcePath: DataProviderSourcePathModel;
  /** لینک به شناسه دسته‌بندی Source */
  linkSourceCategoryId: string;
  /** دسته‌بندی Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourceCategory: DataProviderSourceCategoryModel;
  /** دسته‌بندی Source */
  sourceCategory: DataProviderSourceCategoryModel;
}

