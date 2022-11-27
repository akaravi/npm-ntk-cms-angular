
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreGuideModel extends BaseEntity<number> {
  key: string;
  titleFa: string;
  descriptionFa: string;
  bodyFa: string;

  titleEn: string;
  descriptionEn: string;
  bodyEn: string;

  titleAr: string;
  descriptionAr: string;
  bodyAr: string;

  titleDe: string;
  descriptionDe: string;
  bodyDe: string;

  linkFileIds: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreGuideModel;
  parent: CoreGuideModel;
  children: CoreGuideModel[];
}

