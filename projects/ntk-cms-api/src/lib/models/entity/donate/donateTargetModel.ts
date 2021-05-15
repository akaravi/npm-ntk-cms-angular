import { EnumTransactionLogPublicType } from '../../enums/donate/enumTransactionLogPublicType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';

export class DonateTargetModel extends BaseModuleEntity<number>{
  Title: string;
  Description: string;
  IsPublic: boolean;
  TransactionLogPublic: EnumTransactionLogPublicType;
  ToWebAddress: string;
  HashMd5: string;
  Key: string;
  CurrentClickCount: number;
  CurrentViewCount: number;
  CurrentPaymentCount: number;
  CurrentPaymentSum: number;
  LinkCmsUserId: number;
  LinkTargetCategoryId?: number;
  TargetCategory: DonateTargetCategoryModel;
  LinkMainImageId?: number;
  LinkFileIds: string;
  TargetPeriods: DonateTargetPeriodModel[];
  CarryBillboardId: number;
  CarryToWebAddress: string;
  LinkMainImageIdSrc: string;
  LinkFileIdsSrc: string[];
  QRCodeBase64: string;
}
