import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class HyperShopCategoryModel extends BaseModuleEntity<string> {
  code: string;
  parentCode: string;
  name: string;
  image: string;
  memo: string;
}
