import { BaseEntity } from '../base/baseEntity';
import { BaseEntityCategory } from '../base/baseEntityCategory';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsContentModel } from './newsContentModel';
import { NewsTagModel } from './newsTagModel';

export class NewsCategoryTagModel extends BaseEntityCategory<number> {
  Children: NewsCategoryModel[];
  categoryTag: NewsCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_categoryTag: NewsCategoryModel;
  tags: NewsTagModel[];
}
