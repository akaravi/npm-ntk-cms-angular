import { BaseEntity } from '../base/baseEntity';

export class CoreCurrencyModel extends BaseEntity<number> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Symbol: string;
  ExchangeBuyRatio: number;
  ExchangeSaleRatio: number;
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
  MasterCurrency: string;
}
