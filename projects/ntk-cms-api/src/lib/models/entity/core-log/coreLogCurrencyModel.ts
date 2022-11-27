import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogCurrencyModel extends BaseEntity<string>{
  mainId: number;
  title: string;
  symbol: string;
  exchangeBuyRatio: number;
  exchangeSaleRatio: number;
}
