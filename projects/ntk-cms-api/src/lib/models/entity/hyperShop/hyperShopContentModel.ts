import { BaseModuleEntity } from '../base/baseModuleEntity';

export class HyperShopContentModel  extends BaseModuleEntity<string>{
  Code: string;
  Name: string;
  Unit: string;
  Currency: string;
  CategoryCode?: string;
  Category?: string;
  Status: boolean;
  Image: string;
  Memo: string;
  Price: number;
  SalePrice?: number;
  Count: number;
  Discount?: number;
  ShortDetails?: string;
  Description?: string;
  NewPro?: boolean;
  Brand?: string;
  Sale?: boolean;
  Tags?: string[];
  Colors?: string[];
}
