import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class HyperShopContentModel extends BaseModuleEntity<string> {
  code: string;
  name: string;
  unit: string;
  currency: string;
  categoryCode?: string;
  category?: string;
  status: boolean;
  image: string;
  memo: string;
  price: number;
  salePrice?: number;
  count: number;
  discount?: number;
  shortDetails?: string;
  description?: string;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  tags?: string[];
  colors?: string[];
}
