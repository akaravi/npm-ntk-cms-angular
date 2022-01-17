
import { BaseEntity } from '../base/baseEntity';


export class CoreGuideModel extends BaseEntity<number> {
  Key: string;
  TitleFa: string;
  BodyFa: string;
  TitleEn: string;
  BodyEn: string;
  TitleAr: string;
  BodyAr: string;
  TitleDe: string;
  BodyDe: string;
  LinkFileIds: string;
  LinkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreGuideModel;
  Parent: CoreGuideModel;
  Children: CoreGuideModel[];
}

