import { BaseModuleEntity } from '../base/baseModuleEntity';

export class HyperShopCategoryModel extends BaseModuleEntity<string>{
  Code: string;
  ParentCode: string;
  Name: string;
  Image: string;
  Memo: string;
}
