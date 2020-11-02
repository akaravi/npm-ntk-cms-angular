import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsTagModel extends BaseModuleEntity<number> {
  linkCategoryTagId?: any;
  title?: any;
  contentTags?: any;
  virtual_CategoryTag?: any;
  categoryTag?: any;
}
