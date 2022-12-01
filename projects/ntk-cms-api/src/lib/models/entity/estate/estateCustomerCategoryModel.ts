import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212011
export class EstateCustomerCategoryModel extends BaseModuleEntity<string>
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
