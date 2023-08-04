import { TransactionLogPublicTypeEnum } from '../../enums/donate/transactionLogPublicTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
export class DonateTargetModel extends BaseModuleEntity<number>{
  title: string;
  description: string;
  isPublic: boolean;
  transactionLogPublic: TransactionLogPublicTypeEnum;
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
