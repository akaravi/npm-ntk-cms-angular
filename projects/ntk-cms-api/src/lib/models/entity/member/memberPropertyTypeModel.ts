import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberGroupModel } from './memberGroupModel';
import { MemberPropertyDetailModel } from './memberPropertyDetailModel';
//@@tag-Version-2201011
export class MemberPropertyTypeModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  linkMainImageId: number;
  memberGroup: MemberGroupModel[];

  // tslint:disable-next-line: variable-name
  virtual_PropertyDetails: MemberPropertyDetailModel[];

  linkMainImageSrc: string
}
