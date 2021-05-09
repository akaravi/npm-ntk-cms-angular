import { BaseEntity } from '../base/baseEntity';

export class CoreCurrencyModel extends BaseEntity<number> {
  Title: string;
  Symbol: string;
  ExchangeBuyRatio: number;
  ExchangeSaleRatio: number;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  MasterCurrency: string;
}
