import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetModel } from './donateTargetModel';

export class DonateTargetCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  LinkMainImageId?: number;
  Description: string;
  FontIcon: string;
  LinkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: DonateTargetCategoryModel;
  TargetCategory: DonateTargetCategoryModel;
  Children: DonateTargetCategoryModel[];
  Targets: DonateTargetModel[];
  Sponsors: DonateSponsorModel[];
  LinkMainImageIdSrc: string;
}
