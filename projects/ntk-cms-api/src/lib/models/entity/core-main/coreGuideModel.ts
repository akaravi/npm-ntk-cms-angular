
import { BaseEntity } from '../base/baseEntity';


export class CoreGuideModel extends BaseEntity<number> {
  Key: string;
  TitleFa: string;
  DescriptionFa: string;
  BodyFa: string;

  TitleEn: string;
  DescriptionEn: string;
  BodyEn: string;

  TitleAr: string;
  DescriptionAr: string;
  BodyAr: string;

  TitleDe: string;
  DescriptionDe: string;
  BodyDe: string;

  LinkFileIds: string;
  LinkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreGuideModel;
  Parent: CoreGuideModel;
  Children: CoreGuideModel[];
}

