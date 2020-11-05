import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsTagModel extends BaseModuleEntity<number> {
  LinkCategoryTagId: number;
  Title?: any;
  ContentTags?: any;
  // tslint:disable-next-line: variable-name
  virtual_CategoryTag?: any;
  CategoryTag?: any;
}
