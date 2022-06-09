import { BaseModuleEntity } from '../base/baseModuleEntity';

export class HyperShopCategoryModel extends BaseModuleEntity<string>{
  code: string;
  parentCode: string;
  name: string;
  image: string;
  memo: string;
}
