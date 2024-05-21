import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreCurrencyModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  symbol: string;
  isDefault: boolean;
  exchangeBuyRatio: number;
  exchangeSaleRatio: number;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  masterCurrency: string;
}
