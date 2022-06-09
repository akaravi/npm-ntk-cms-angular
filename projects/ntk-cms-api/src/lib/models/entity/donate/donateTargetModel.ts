import { EnumTransactionLogPublicType } from '../../enums/donate/enumTransactionLogPublicType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';

export class DonateTargetModel extends BaseModuleEntity<number>{
  title: string;
  description: string;
  isPublic: boolean;
  transactionLogPublic: EnumTransactionLogPublicType;
  toWebAddress: string;
  hashMd5: string;
  keyCode: string;
  currentClickCount: number;
  currentViewCount: number;
  currentPaymentCount: number;
  currentPaymentSum: number;
  linkCmsUserId: number;
  linkTargetCategoryId?: number;
  targetCategory: DonateTargetCategoryModel;
  linkMainImageId?: number;
  linkFileIds: string;
  targetPeriods: DonateTargetPeriodModel[];
  carryBillboardId: number;
  carryToWebAddress: string;
  linkMainImageIdSrc: string;
  linkFileIdsSrc: string[];
  qRCodeBase64: string;
}
