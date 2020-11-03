import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsTagModel extends BaseModuleEntity<number> {
  LinkCategoryTagId: number;
  Title?: any;
  ContentTags?: any;
  virtual_CategoryTag?: any;
  CategoryTag?: any;
}
