import { BaseEntity } from '../base/baseEntity';

export class CoreLogCurrencyModel extends BaseEntity<string>{
  MainId: number;
  Title: string;
  Symbol: string;
  ExchangeBuyRatio: number;
  ExchangeSaleRatio: number;
}
