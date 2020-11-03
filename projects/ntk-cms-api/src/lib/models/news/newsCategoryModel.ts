import { BaseEntity } from '../base/baseEntity';
import { BaseEntityCategory } from '../base/baseEntityCategory';
import { NewsContentModel } from './newsContentModel';

export class NewsCategoryModel extends BaseEntityCategory<number> {
  Children: NewsCategoryModel[];
  Category: NewsCategoryModel;
  virtual_Category: NewsCategoryModel;
  Contents: NewsContentModel[];
}
