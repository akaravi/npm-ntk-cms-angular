import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberHistoryModel } from './memberHistoryModel';
import { MemberPropertyDetailValueModel } from './memberPropertyDetailValueModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
import { MemberUserModel } from './memberUserModel';
//@@tag-Version-2201011
export class MemberPropertyModel extends BaseModuleEntity<number> {
  linkMemberId: number;
  title: string;
  description: string;
  linkCmsUserId: number;
  linkPropertyTypeId: number;

  // tslint:disable-next-line: variable-name
  virtual_memberUser: MemberUserModel;

  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  address: string;
  linkMainImageId: number;
  linkExtraImageIds: string;
  linkFileIds: string;
  sumLikeClick: number;
  sumLikeScore: number;
  viewCount: number;

  histores: MemberHistoryModel[];

  // tslint:disable-next-line: variable-name
  virtual_PropertyDetailValue: MemberPropertyDetailValueModel[];

  mainImageSrc: string;
  linkExtraImageIdsSrc: string[];
  linkFileIdsSrc: string[];
}
