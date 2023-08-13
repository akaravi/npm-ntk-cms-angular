import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateCategoryRackFolderModel } from './estateCategoryRackFolderModel';
//@@tag-Version-2212011
export class EstateCategoryZoneModel extends BaseModuleEntity<string>
{
  title: string;
  description: string;
  iconFont: string;
  iconColor: string;
  linkMainImageId: number;
  linkMainImageIdSrc: string;
  linkLocationIds: number[]
}
