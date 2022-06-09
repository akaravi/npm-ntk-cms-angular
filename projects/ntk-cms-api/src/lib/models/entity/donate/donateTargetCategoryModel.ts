import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetModel } from './donateTargetModel';

export class DonateTargetCategoryModel extends BaseModuleEntity<number> {
  title: string;
  linkMainImageId?: number;
  description: string;
  fontIcon: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: DonateTargetCategoryModel;
  targetCategory: DonateTargetCategoryModel;
  children: DonateTargetCategoryModel[];
  targets: DonateTargetModel[];
  sponsors: DonateSponsorModel[];
  linkMainImageIdSrc: string;
}
