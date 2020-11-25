export class HyperShopContentModel {
  Code: string;
  Name: string;
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
