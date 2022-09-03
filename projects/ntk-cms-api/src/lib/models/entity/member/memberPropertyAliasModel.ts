import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';

export class MemberPropertyAliasModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  linkCmsUserId: number;
  linkPropertyTypeId: number;
  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  address: string;
  linkMainImageId?: number;
  linkExtraImageIds: string;

  viewCount: number;
}
