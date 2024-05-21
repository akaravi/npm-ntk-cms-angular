import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateActivityTypeModel extends BaseModuleEntity<string> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
}
