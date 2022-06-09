import { BaseEntity } from '../base/baseEntity';

export class CoreLogCurrencyModel extends BaseEntity<string>{
  mainId: number;
  title: string;
  symbol: string;
  exchangeBuyRatio: number;
  exchangeSaleRatio: number;
}
