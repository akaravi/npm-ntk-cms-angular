import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateActivityTypeModel extends BaseModuleEntity<string>
{
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
}
